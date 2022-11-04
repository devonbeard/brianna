---
id: cb16045d-57a8-43c4-9a04-455493c6f602
blueprint: page_builder
title: Contact
updated_by: e1d8beb3-0ab9-4da3-abc7-7a4680e5f875
updated_at: 1651009845
blocks:
  -
    background_color:
      label: Primary
      value:
        - '#5f377a'
    text_color:
      label: White
      value:
        - '#ffffff'
    swap_order_of_columns: false
    left_column:
      -
        type: heading
        attrs:
          level: 1
        content:
          -
            type: text
            marks:
              -
                type: textAlign
                attrs:
                  align: start
            text: 'Contact our talented staff of adventurers, listeners, and creators'
      -
        type: heading
        attrs:
          level: 2
        content:
          -
            type: text
            text: 'New Clients'
      -
        type: paragraph
        attrs:
          class: null
        content:
          -
            type: text
            marks:
              -
                type: bold
            text: 'Either call us: '
          -
            type: text
            marks:
              -
                type: link
                attrs:
                  href: 'tel:3154845989'
                  rel: null
                  target: null
                  title: null
            text: '(315) 484-5989'
          -
            type: text
            marks:
              -
                type: bold
            text: ','
          -
            type: hard_break
            marks:
              -
                type: bold
          -
            type: text
            marks:
              -
                type: bold
            text: 'Or fill out the form on the right, and we''ll call you.'
      -
        type: paragraph
        attrs:
          class: p1
        content:
          -
            type: text
            marks:
              -
                type: textAlign
                attrs:
                  align: start
            text: 'In our first call: We will review the '
          -
            type: text
            marks:
              -
                type: link
                attrs:
                  href: 'statamic://entry::430d3f31-21ab-4cbd-a6f9-88ee22138fea'
                  rel: null
                  target: null
                  title: null
              -
                type: textAlign
                attrs:
                  align: start
            text: 'Web & Digital Discovery Assessment'
          -
            type: text
            marks:
              -
                type: textAlign
                attrs:
                  align: start
            text: ' together.  The Discovery meeting is a learning meeting, designed to help us understand you, your firm, the issues you''re having now, and start to formulate the role web & digital will play in your strategic plan, and long term goals.  We look forward to meeting you.'
      -
        type: heading
        attrs:
          level: 2
        content:
          -
            type: text
            text: Phone
      -
        type: bullet_list
        content:
          -
            type: list_item
            content:
              -
                type: paragraph
                attrs:
                  class: null
                content:
                  -
                    type: text
                    text: '(315) 484-5989'
      -
        type: heading
        attrs:
          level: 2
        content:
          -
            type: text
            text: 'Office Hours'
      -
        type: bullet_list
        content:
          -
            type: list_item
            content:
              -
                type: paragraph
                attrs:
                  class: null
                content:
                  -
                    type: text
                    marks:
                      -
                        type: textAlign
                        attrs:
                          align: start
                    text: 'Mon - Thurs: 9am - 4pm (Eastern)'
      -
        type: heading
        attrs:
          level: 2
        content:
          -
            type: text
            text: Locations
      -
        type: paragraph
        attrs:
          class: null
        content:
          -
            type: text
            text: '*All Locations by Appointment Only:'
      -
        type: bullet_list
        content:
          -
            type: list_item
            content:
              -
                type: paragraph
                attrs:
                  class: null
                content:
                  -
                    type: text
                    marks:
                      -
                        type: textAlign
                        attrs:
                          align: start
                    text: 'Syracuse NY - Headquarters: 2610 S. Salina St. Syracuse, NY 13205 **By appointment only - Not for mailing / invoicing (see below))'
          -
            type: list_item
            content:
              -
                type: paragraph
                attrs:
                  class: null
                content:
                  -
                    type: text
                    text: 'Fayetteville NY (Virtual + eSpaces) '
          -
            type: list_item
            content:
              -
                type: paragraph
                attrs:
                  class: null
                content:
                  -
                    type: text
                    text: 'Asheville NC (Virtual + eSpaces)'
          -
            type: list_item
            content:
              -
                type: paragraph
                attrs:
                  class: null
                content:
                  -
                    type: text
                    text: 'Philadelphia PA (Virtual + eSpaces)'
      -
        type: paragraph
        attrs:
          class: null
      -
        type: heading
        attrs:
          level: 2
        content:
          -
            type: text
            text: 'Billing / Mailing Address'
      -
        type: bullet_list
        content:
          -
            type: list_item
            content:
              -
                type: paragraph
                attrs:
                  class: null
                content:
                  -
                    type: text
                    marks:
                      -
                        type: link
                        attrs:
                          href: 'statamic://asset::assets::content/contact/muirpay.png'
                          rel: null
                          target: null
                          title: null
                      -
                        type: bold
                      -
                        type: textAlign
                        attrs:
                          align: start
                    text: '4 Simple Ways to Pay'
          -
            type: list_item
            content:
              -
                type: paragraph
                attrs:
                  class: null
                content:
                  -
                    type: text
                    marks:
                      -
                        type: bold
                      -
                        type: textAlign
                        attrs:
                          align: start
                    text: 'Billing / Invoices (Mailing ONLY.  For meetings, see above):'
                  -
                    type: text
                    marks:
                      -
                        type: textAlign
                        attrs:
                          align: start
                    text: '104 Alwyn Rd, Syracuse NY 13214'
    type: hero_leaderboard
    enabled: true
    right_column:
      -
        type: set
        attrs:
          values:
            type: html
            html_code: '{{ site_globals:global_contact_form }}'
      -
        type: paragraph
        attrs:
          class: null
use_meta_keywords: false
no_index_page: false
no_follow_links: false
sitemap_priority: '0.5'
sitemap_changefreq: daily
override_twitter_settings: false
override_twitter_card_settings: false
twitter_card_type_page: summary
---
