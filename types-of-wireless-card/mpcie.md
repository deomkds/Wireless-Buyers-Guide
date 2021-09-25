# Mini PCIe

Placas Mini PCIe são mais úteis para usuários de computadoers mais antigos que não possuem placas com conexão M.2. Em relação a Mini PCIe, existem algumas opções:

* Mini PCIe *half-size*
* Mini PCIe *full-size*
* Placa Apple AirPort adaptada para Mini PCIe *full-size*

Usuários de notebooks mais antigos geralmente estarão limitados às placas Wi-Fi Mini PCIe *half-size* devido a falta de espaço. Já para usuários de desktop, é recomendado comprar uma placa Apple AirPort e usar um adaptador. O motivo para isso é evitar problemas com IDs de PCI incompatíveis que não ativarão as *kexts* e exigirão forçar o carregamento ou modificar a lista de IDs de PCI da *kext* para suportar a placa.

Outra coisa a se observar com placas Mini PCIe é que algumas fabricantes inserem uma lista branca de placas Wi-Fi na BIOS/firmware UEFI, de forma que somente as placas da própria marca sejam reconhecidas e funcionem. O computador **não inicia nem mesmo a BIOS/UEFI** ao usar uma placa de outra marca. As fabricantes que mais fazem isso são:

* Lenovo (7ª geração e anterior)
* Toshiba
* HP (3ª geração e anterior)
* Compaq

Existem maneiras de contornar isso usando [modificações de BIOS](https://medium.com/@p0358/removing-wlan-wwan-bios-whitelist-on-a-lenovo-laptop-to-use-a-custom-wi-fi-card-f6033a5a5e5a) (em inglês), mas é necessário ter bastante cuidado, visto que patches mal feitos podem **brickar o computador**.

# Placas Suportadas

* **BCM94360HMB** (ABGN+AC, BT 4.0, 3x3:3):

  * AzureWave AW-CB160H
  * Alpha Networks WMC-AC01
  * Arcadyan WN8833B-AC
  * Gemtek WMDB-150AC
  * Unex DAXB-81
  * Wistron NeWeb DNXB-C1

* **BCM94352HMB** (ABGN+AC, BT 4.0, 2x2:2):

  * AzureWave AW-CE123H
  * Dell DW1550
  * HP TPC-Q013
  * Lenovo Lite-On WCBN606BH

Todas as placas apresentadas aqui necessitam do seguinte:

* [AirportBrcmFixup](https://github.com/acidanthera/AirportBrcmFixup/releases)
* [BrcmPatchRAM](https://github.com/acidanthera/BrcmPatchRAM/releases)
  * BrcmBluetoothInjector
  * BrcmFirmwareData
  * Correção BrcmPatchRAM:
    * BrcmPatchRAM3 para macOS a partir do 10.14 Mojave (precisa ser combinado com o BrcmBluetoothInjector).
    * BrcmPatchRAM2 para OS X 10.11 El Capitan a macOS 10.14 Mojave.
    * BrcmPatchRAM para OS X 10.10 Yosemite ou anterior.

# Modelos Antigos

Não são suportadas nativamente no macOS 10.14 Mojave.

Com esses modelos, será necessário reinjetar o plugin antigo da placa Wi-Fi usado no macOS 10.13 High Sierra para que elas funcionem no macOS 10.14 Mojave. Existem algumas kexts diferentes para fazer isso, mas no geral, recomenda-se evitar essas essas placas.

**Observação**: injetar essa kext no macOS 10.15 Catalina é ainda mais instável.

* **BCM94322**4 HMS/HMB (ABGN, 2x2:2)
  * Dell DW1520
  * HP Gemtek WMIB-275N
  * Lenovo Gemtek WMIB-275N
  * Pegatron UPWL6024

* **AR9280** (ABGN, 2x2:2)

  * Atheros AR5BHB92
  * Atheros AR5BXB92
  * AzureWave AW-NE772
  * AzureWave AW-NE773
  * Compex WLE200N5-23-ESD
  * Compex WLE200NX
  * Dell DW1515
  * HP U98Z044
  * HP Lite-On WN6502AH
  * Silex SX-PCEAN
  * SparkLAN WPEA-110N
  * SparkLAN WPEA-111N
  * Ubiquiti Networks SR71-E
  * Unex DNXA-92

* **AR9380** (ABGN, 3x3:3)
  * Alpha Networks WMC-ND02
  * Killer Wireless-N 1103
  * Atheros AR5BHB112
  * Atheros AR5BXB112
  * Compex WLE300N5-22 7A0000
  * Compex WLE300NX 6A0000
  * HP U98Z081
  * JJPlus JWX6051
  * Lite-On WN6508A
  * SparkLAN WPEA-127N
  * SparkLAN WPEA-128N
  * Tehnoetic TET-N450DB
  * Vikings Atheros450
  * Wistron NeWeb DNXA-G1
