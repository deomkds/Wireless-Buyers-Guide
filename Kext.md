# Kexts Necessárias

* [Placas da Broadcom](#placas-da-broadcom)
* [Placas da Intel](#placas-da-intel)
* [Placas da Atheros](#placas-da-atheros)

## Placas da Broadcom

### [AirportBrcmFixup](https://github.com/acidanthera/AirportBrcmFixup)

Essa kext é necessária para corrigir o Wi-Fi em muitas placas da Broadcom. Embora nem todas precisem, a kext é exigida para usuários de placas que não sejam fabricadas pela Apple. A kext também tem a funcionalidade de injetar kexts da Broadcom mais antigos em versões mais novas do macOS.

Observação:
* Placas Apple Airport e Fenvi não precisam dessa kext.

### [BrcmPatchRAM](https://github.com/acidanthera/BrcmPatchRAM/releases)

Exigida para todas as placas Wi-Fi que não foram fabricadas pela Apple, devido à maneira como lidam com o firmware. É, na verdade, um pacote composto por várias kexts:

* BrcmBluetoothInjector
* BrcmFirmwareData
* Correção BrcmPatchRAM:
  * BrcmPatchRAM3 para macOS a partir do 10.14 Mojave (precisa ser combinado com o BrcmBluetoothInjector).
  * BrcmPatchRAM2 para OS X 10.11 El Capitan a macOS 10.14 Mojave.
  * BrcmPatchRAM para OS X 10.10 Yosemite ou anterior.

Observação:
* Placas Apple Airport e Fenvi não precisam dessas kexts.
* A ordem do OpenCore é alfabética: Injector -> Data -> RAM.

## Placas da Intel

### [itlwm](https://github.com/OpenIntelWireless/itlwm)

Atualmente, conecta e até mesmo suporta o *framework* IO80211 da própria Apple (por meio do AirportItlwm). Infelizmente não suporta AirDrop. Veja aqui os recursos e as limitações: [OpenIntelWireless](https://openintelwireless.github.io/).

### [IntelBluetoothFirmware](https://github.com/OpenIntelWireless/IntelBluetoothFirmware/releases)

Adiciona suporte ao Bluetooth no macOS quando combinado com uma placa Wi-Fi Intel.

## Placas da Atheros

### [IO80211Family.kext do macOS 10.13 High Sierra](https://github.com/khronokernel/IO80211-Patches/blob/main/10.13.6-High-Sierra-Kexts/IO80211HighSierra.kext.zip)

Essa kext é necessária para todos os chipsets Atheros que tiveram o suporte abandonado no macOS 10.14 Mojave. Inclui:

* AR242x
* AR542x
* AR5416
* AR5418
* AR9280 - AR5BHB92
* AR9285 - AR5B95
* AR9287 - AR5B97
* AR9380 - AR5BXB112


### [ATH9KFixup](https://github.com/chunnann/ATH9KFixup)

Para ser combinada com o AirPortAtheros40. Adiciona suporte para várias placas Atheros não suportadas, com ideia similar ao AirportBrcmFixup:

* AR946X (AR9462 e AR9463)
* AR9485
* AR9565

### [AthBluetoothFirmware](https://github.com/zxystd/AthBluetoothFirmware/releases)
Exigida para garantir que o firmware Bluetooth seja carregado corretamente no macOS.
