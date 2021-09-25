# Chipsets Supportados e Não Suportados

Existe uma quantidade limitada de hardware suportado no macOS, independente da categoria. As coisas não são diferentes com placas Wi-Fi.

## Chipsets Suportados

### macOS 11 Big Sur

* BCM943602
* BCM94360
* BCM94352
* BCM94350

### macOS 10.15 Catalina

* BCM943224
* BCM94331
  * Talvez exija o carregamento forçado da `IO80211Family.kext` ao usar o macOS 10.15 Catalina. Veja `Kernel -> Force` no OpenCore para mais detalhes.
* Todos os chipsets suportados no macOS 11 Big Sur também são suportados no macOS 10.15 Catalina.

### macOS 10.14 Mojave

* BCM94322
* Todos os chipsets suportados no macOS 10.15 Catalina também são suportados no macOS 10.14 Mojave.

### macOS 10.13 High Sierra

* AR242x
* AR542x
* AR5416
* AR5418
* AR9280 - AR5BHB92
* AR9285 - AR5B95
* AR9287 - AR5B97
* AR9380 - AR5BXB112
* Todos os chipsets suportados no macOS 10.14 Mojave também são suportados no macOS 10.13 High Sierra.

### macOS 10.11 El Capitan

* BCM4311
* BCM4318
* BCM4306
* BCM4309
* BCM4321
* BCM4322
* Todos os chipsets suportados no macOS 10.13 High Sierra também são suportados no macOS 10.11 El Capitan.

# Chipsets Não Suportados

## Broadcom

* BCM4312
* BCM4313
* BCM4356
* BCM43142
* BCM43228

## Atheros

* AR5424

## Intel

Atualmente, nenhum chipset Intel possui suporte oficial no macOS. No entanto, um belo trabalho tem sido feito nessa área pelo itlwm: [Placas Wi-Fi da Intel](../misc/intel.md):

