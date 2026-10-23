# Kanad ilma puurideta: eestikeelne veebileht

**Staatus:** 23.10.2026 veebilehel kasutusel olev eestikeelne tekst. **Kirju ei ole saadetud.**

## Avalikud aadressid

- [Eestikeelne projekt ja 101 Riigikogu liikme register](https://proxysociety.org/et/projects/chickens-no-cages#outreach)
- [Eestikeelne allika-, andmekaitse- ja autoriõigusteave](https://proxysociety.org/et/projects/chickens-no-cages/rights)
- [Inglise keel](https://proxysociety.org/projects/chickens-no-cages#outreach) · [traditsiooniline hiina keel](https://proxysociety.org/zh-tw/projects/chickens-no-cages#outreach)

## Lähtefailid ja keelepiir

Selle teksti autoriteetne avaldatud versioon on veebilehe lähtekoodis:

- `app/chicken-locales.ts`: eestikeelne juhtumikirjeldus ja kolme keele aadressid
- `app/components/ChickenOutreachTracker.tsx`: statistika, sündmuste ajajoon, allikatega tsitaatide kontekstid, 101 saadiku nimekiri, otsing, filtrid ja pöördumiste staatused
- `app/components/ChickenLegalNotice.tsx`: eestikeelne avaldamis-, allika-, autoriõiguse-, GDPR-i ja parandustaotluste teave
- `app/et/projects/chickens-no-cages/page.tsx` ja `app/et/projects/chickens-no-cages/rights/page.tsx`: eraldi marsruudid, kanoonilised URL-id, keelevahetusviited ja otsingumootorite metaandmed

Eestikeelne versioon puudutab **seda konkreetset juhtumit ja selle õigusteavet**. Teiste Proxy Society projektide täielikku tõlget see töö ei kinnita. Kõik viited varasematele algdokumentidele jäävad samaks. Originaalsed Riigikogu stenogrammikatked olid juba eesti keeles: neid ei tõlgita ega muudeta.

## Toimetuspõhimõtted

- Inimese eesmärk: „Munakanu ei tohiks puurides pidada.”
- Avalik seisukoht, seaduseelnõu algatamine, komisjonikuuluvus, kirja saatmine ja vastus on **eri andmed**.
- 101 liikme avalike väljavõtete olemasolu ei tähenda, et 101 saadikul on kindlaks tehtud seisukoht puurispidamise suhtes.
- 20 eraldi üle vaadatud isikustatud tsitaati kuvatakse eristatult teistest teemadest; lühendatud väljavõte ei ole täielik seisukoht.
- Nimekirja korraga ainult 12 kirjet, et lehekülg püsiks kasutatav; otsing hõlmab kogu 101 liikme uurimisandmestikku.
- Foto kasutamine ei tähenda saadiku toetust projektile. Kasutusõigused ja autorid on nähtavad.
- Vastamata kiri ei tähenda eelnõu vastustamist. Saatmata Gmaili mustand ei ole avalik pöördumine.

## Õiguslik ja kvaliteedialane piir

Eestikeelne õigusteave on ingliskeelse avaldamispoliitika sisu lokaliseering, **mitte juristi antud õigusalane kinnitus**. Isikustatud poliitiliste seisukohtade süstemaatilise avaldamise ja tulevaste erakirjade tsiteerimise küsimused vajavad jätkuvalt eraldi õiguslikku hinnangut.

Automaatne CI kontrollib kõiki kuut marsruuti (projekt + õigusteave kolmes keeles), sealhulgas ligipääsetavuse ja arendusversiooni turvakontrolle. Veebilehe päris kasutajate kogemust ja keelelist toimetamist tuleb eraldi üle vaadata.
