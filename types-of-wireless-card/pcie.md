# PCIe

De longe a opção mais popular entre usuários de desktop é comprar uma velha placa Wi-Fi Apple AirPort e encaixá-la em um adaptador PCIe do tipo *riser*. Os benefícios são que, enquanto o hardware funcionar nativamente em um Mac de verdade, a placa funcionará sem quaisquer *kexts* ou modificações de *framework*. Existem algumas opções PCIe:

* Placa Apple AirPort adaptada para PCIe *full-size* (recomendado).
* Placa Apple AirPort adaptada para M.2 com chave B+M (mesma conexão que os SSDs NVMe utilizam).
* Placa Apple AirPort adaptada para M.2 com chave A+E (mesma conexão que as placas Wi-Fi da Intel utilizam).
* Placa Wi-Fi PCIe *full-size*.

Chipsets atualmente suportados:

* BCM943602CDP
* BCM943602CD
* BCM94360CD
* BCM94331CD (talvez seja necessário forçar a *kext* a carregar no macOS 10.15 Catalina)
* BCM94360CS2
* BCM943602CS
* BCM94360CSAX
* BCM94360CS
* BCM94352Z
* BCM94350ZAE

# Placas Suportadas (PCIe *full-size*)

* **BCM94360CD** (ABGN+AC):

  * Fenvi FV T919 (Bluetooth 4.0)
  * Fenvi AC1900 (Sem Bluetooth, saindo de linha)
  * TP-LINK Archer T9E AC1900 (Sem Bluetooth, saindo de linha)
  * TP-LINK Archer T8E (Sem Bluetooth)
  * RNX-AC1900PCE (Sem Bluetooth)
  * ASUS PCE-AC66 (Sem Bluetooth)
  * ASUS PCE-AC68 (Sem Bluetooth)

* **BCM94360CS2** (ABGN+AC):

  * Fenvi FV-HB1200 (Bluetooth 4.0)
  * AWD Wireless LAN Card (Sem Bluetooth)

* **BCM94352** (ABGN+AC):

  * TP-LINK Archer T6 (Sem Bluetooth)
  * Rosewill RNX-AC1300PCE (Sem Bluetooth)
  * ASUS PCE-AC56 (Sem Bluetooth)

Todas as placas apresentadas aqui, exceto as Apple AirPort e Fenvi, necessitam do seguinte:

* [AirportBrcmFixup](https://github.com/acidanthera/AirportBrcmFixup/releases)
* [BrcmPatchRAM](https://github.com/acidanthera/BrcmPatchRAM/releases)
  * BrcmBluetoothInjector
  * BrcmFirmwareData
  * Correção BrcmPatchRAM:
    * BrcmPatchRAM3 para macOS a partir do 10.14 Mojave (precisa ser combinado com o BrcmBluetoothInjector).
    * BrcmPatchRAM2 para OS X 10.11 El Capitan a macOS 10.14 Mojave.
    * BrcmPatchRAM para OS X 10.10 Yosemite ou anterior.

# Modelos Antigos

Não suportadas nativamente no macOS 10.14 Mojave.

Com esses modelos, será necessário reinjetar o plugin antigo da placa Wi-Fi usado no macOS 10.13 High Sierra para que elas funcionem no macOS 10.14 Mojave. Existem algumas *kexts* diferentes para fazer isso, mas no geral, recomenda-se evitar essas placas a não ser que seja absolutamente necessário utilizá-las.

**Observação**: injetar essa *kext* no macOS 10.15 Catalina é ainda mais instável.
**É altamente recomendado trocá-la por uma placa mais nova.**

* **Atheros 9380**:
  * TP-Link TL-WDN4800
  * Rosewill N900
  * Atheros AR5BDT92
* **Atheros 9280**:
  * Dell DW 1525
  * Gemtek WPEA-113N
* **Atheros AR9287**:
  * Nexxt Solutions Saros 300 (APLDT300N1)
  * TP-LINK TL-WN881ND
* **Atheros AR9285**:
  * AzureWave AW-NE106
  * Rosewill RNX-N150PCe v1
  * SMC SMCWPCIeS-N
  * TP-LINK TL-WN781ND v1
  * ZyXEL NWD3105
