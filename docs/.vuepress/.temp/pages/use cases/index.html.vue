<template><div><h1 id="модель-прецедентів" tabindex="-1"><a class="header-anchor" href="#модель-прецедентів"><span>Модель прецедентів</span></a></h1>
<p>В цьому файлі необхідно перелічити всі документи, розроблені в проекті та дати посилання на них.</p>
<p><em>Модель прецедентів повинна містити загальні оглядові діаграми та специфікації прецедентів.</em></p>
<p>Вбудовування зображень діаграм здійснюється з використанням сервісу <a href="https://plantuml.com/" target="_blank" rel="noopener noreferrer">plantuml.com<ExternalLinkIcon/></a>.</p>
<p>В markdown-файлі використовується опис діаграми</p>
<div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>center</span> <span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;<span class="token punctuation">"</span></span>
<span class="token punctuation">></span></span>

@startuml

<span class="token code keyword">    right header
        &lt;font size=24 color=black>Package: &lt;b>UCD_3.0
    end header</span>

<span class="token code keyword">    title
        &lt;font size=18 color=black>UC_8. Редагувати конфігурацію порталу
        &lt;font size=16 color=black>Діаграма прецедентів
    end title</span>


<span class="token code keyword">    actor "Користувач" as User #eeeeaa</span>
    
<span class="token code keyword">    package UCD_1{
        usecase "&lt;b>UC_1&lt;/b>\nПереглянути список \nзвітів" as UC_1 #aaeeaa
    }</span>
    
<span class="token code keyword">    usecase "&lt;b>UC_1.1&lt;/b>\nЗастосувати фільтр" as UC_1.1
    usecase "&lt;b>UC_1.2&lt;/b>\nПереглянути метадані \nзвіту" as UC_1.2  
    usecase "&lt;b>UC_1.2.1&lt;/b>\nДати оцінку звіту" as UC_1.2.1  
    usecase "&lt;b>UC_1.2.2&lt;/b>\nПереглянути інформацію \nпро авторів звіту" as UC_1.2.2</span>
    
<span class="token code keyword">    package UCD_1 {
        usecase "&lt;b>UC_4&lt;/b>\nВикликати звіт" as UC_4 #aaeeaa
    }</span>
    
<span class="token code keyword">    usecase "&lt;b>UC_1.1.1&lt;/b>\n Використати \nпошукові теги" as UC_1.1.1  
    usecase "&lt;b>UC_1.1.2&lt;/b>\n Використати \nрядок пошуку" as UC_1.1.2
    usecase "&lt;b>UC_1.1.3&lt;/b>\n Використати \nавторів" as UC_1.1.3  </span>
    
    
    
<span class="token code keyword">    User -> UC_1
    UC_1.1 .u.> UC_1 :extends
    UC_1.2 .u.> UC_1 :extends
    UC_4 .d.> UC_1.2 :extends
    UC_1.2 .> UC_1.2 :extends
    UC_1.2.1 .u.> UC_1.2 :extends
    UC_1.2.2 .u.> UC_1.2 :extends
    UC_1 ..> UC_1.2.2 :extends</span>
    
    
<span class="token code keyword">    UC_1.1.1 -u-|> UC_1.1
    UC_1.1.2 -u-|> UC_1.1
    UC_1.1.3 -u-|> UC_1.1</span>
    
<span class="token code keyword">    right footer
        Аналітичний портал. Модель прецедентів.
        НТУУ КПІ ім.І.Сікорського
        Киів-2020
    end footer</span>

@enduml

<span class="token bold"><span class="token punctuation">**</span><span class="token content">Діаграма прецедентів</span><span class="token punctuation">**</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>center</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>яка буде відображена наступним чином</p>
<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
    >
<img src="https://www.plantuml.com/plantuml/svg/ZLNTQXf15BxFKnpCjTliAYK48u7q0NhZNK5MtIHIwvRT5Kf_G6CmlGXDAS50Q4dRl81efTQ_liAPD-etixzQrtOlXfqvPxxlEpypS-HwfkErNZHsTWYVKpyzy-ZCCckMenRaLpYncnwvzTVMeP6dgjsmdSDAmwm-Bpx5O9vQ1rIe54l7JyevRK_jifgr44JDlRhNi3RXwVihUANZyhv6_9N7_8C7F19T7l90dFE4UCfBNeWBqPVBeetbdkYB3yI_UIdQy1dmJ7GtaZnU8U4RO4XmOF2S1q30xrZq5EiO9ETm64Q1-EBzGCogPpkKuJl9oHFHWQ-lyJ93faibrt9ery9dccg36bxwQIAP8lrD9B7bMbNJjIYZibVM2uygnMTDleSMwE4Huhc6cgwANtGGA0YHXId1woSF4RvIwZC3W7PDCs9-5_El4saXrIs48mG4qqcaMYLv9gw0tewmDNqpbB5LDV8xLgMHvLo8Vb9vDyOsqeGQaTIRi0-MikwyuAdeqaOiJKz7swvMueeBLTfvr5_mblsn94GmLBbgowIdS1ifLQVKikS3IPzuWXwVgJ48DM08yVF_NzymRHJ0HjqQGCkWiFWULPVd2ZI4TPcFIQBYwPcCwfvEW3HTe-ooNMEkPBBq85aRm7F_LBzIYoHcBf2yDgY3cIqgBtz1kPFMqln5Eh1UUJZkRcmrjbZpfDK26_msxjrcJJAdU1ZRFKYBZElcHDHX6REjxDjYyXo75KYrvFws95w84zls4Yy4VyI1bFTlNzP7N68suLyhLpEkzSze1dd1ucf9kNEr6F4BV-S7VY1SjVVSaqTphd5Fus_uKns1VhXIpJlYPRpj3lG0oXfxHlmK1MftZZ31K_S7" alt="uml diagram" loading="lazy">
<p><strong>Діаграма прецедентів</strong></p>
</center>
</div></template>


