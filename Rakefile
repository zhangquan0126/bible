require 'rubocop/rake_task'
require 'jekyll'
require 'safe_yaml/load'

task default: %w[rubocop proof]

task :build do
  config = Jekyll.configuration(
    'source' => './',
    'destination' => './_site'
  )
  site = Jekyll::Site.new(config)
  Jekyll::Commands::Build.build site, config
end

task proof: 'build' do
  require 'html-proofer'
  HTMLProofer.check_directory(
    './_site', \
    assume_extension: true, \
    check_html: true, \
    disable_external: true
  ).run
end

task proof_external: 'build' do
  require 'html-proofer'
  HTMLProofer.check_directory(
    './_site', \
    assume_extension: true, \
    check_html: true, \
    cache: { timeframe: '1w' }, \
    hydra: { max_concurrency: 12 }
  ).run
end

task :build_date do
  last_build_date = {}
  last_build_date['date'] = Time.new
  file_path = File.join(__dir__, '_data/build_date.yml')
  File.write(file_path, YAML.dump(last_build_date))
end

RuboCop::RakeTask.new
