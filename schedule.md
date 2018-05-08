---
layout: post
language: Chinese
plan:
- name: "「從聖經看屬靈生命」"
  startDate: "02-15-2018"
  totalDays: 730
  days: 
    - index: 97
      verses:
        - titleCh: 申命記 10-11
          titleEn: Deuteronomy 10-11
          verseBG: duet.10-11
          verseYV: DUE.1
        - titleCh: 詩篇 111
          titleEn: Psalm 111
          verseBG: ps.111
          verseYV: PSA.111
---

{% assign verse1 = page.plan.days[0].verses[0].titleCh %}
{% assign bgV1 = page.plan.days[0].verses[0].verseBG %}
{% assign yvV1 = page.plan.days[0].verses[0].verseYV %}
{% assign verse2 = page.plan.days[0].verses[1].titleCh %}
{% assign bgV2 = page.plan.days[0].verses[1].verseBG %}
{% assign yvV2 = page.plan.days[0].verses[1]..verseYV %}

{% assign bgLink1 = "https://www.biblegateway.com/passage/?search=" | append:bgV1 | append: "&version=CUVMPT" %}
{% assign bgLink2 = "https://www.biblegateway.com/passage/?search=" | append:bgV1 | append: "&version=CUVMPS" %}
{% assign bgLink3 = "https://www.biblegateway.com/passage/?search=" | append:bgV1 | append: "&version=NIV" %}
{% assign yvLink1 = "https://www.bible.com/zh-TW/bible/46/" | append:yvV1 | append: ".CUNP" %}

{% assign bgLink4 = "https://www.biblegateway.com/passage/?search=" | append:bgV2 | append: "&version=CUVMPT" %}
{% assign bgLink5 = "https://www.biblegateway.com/passage/?search=" | append:bgV2 | append: "&version=CUVMPS" %}
{% assign bgLink6 = "https://www.biblegateway.com/passage/?search=" | append:bgV2 | append: "&version=NIV" %}
{% assign yvLink2 = "https://www.bible.com/zh-TW/bible/46/" | append:yvV2 | append: ".CUNP" %}

{{ page.langeuage }}
{{ page.plan.name }}
{{ page.plan.totalDays }}
{{ page.plan.startDate }}
<a href="{{ bgLink1 }}">{{ verse1 }}</a>

<a href="{{ bgLink2 }}">{{ verse2 }}</a>

Under Construction!
