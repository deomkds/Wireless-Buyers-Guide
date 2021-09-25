# Suporte a Bluetooth

A respeito do Bluetooth no macOS, é bastante confuso saber o que é realmente suportado e o que não é.

## Chipsets Bluetooth Suportados

O usuário [MarkVillacampa](https://www.tonymacx86.com/members/markvillacampa.1790473/) fez um belo trabalho de descobrir os chipsets suportados. Eis o link:

* **[Lista de Bluetooth](https://www.tonymacx86.com/threads/guide-how-to-get-bluetooth-and-wifi-working.275962/) (em inglês)**
  * IOGEAR Bluetooth 4.0 (GBU521)
  * ASUS USB-BT400
  * Insignia NS-PCY5BMA

**Observação a respeito de Asus e Lenovo**
Nos notebooks com chipset de 7ª geração e mais novos, o Bluetooth foi integrado na PCH e essas OEMs não possuem trilhas USB conectadas em seus *slots* A/E. Isso significa que será necessário soldar novos conectores na placa-mãe ou conectar um cabo USB em uma porta já existente.

## Bluetooth em Placas Intel

Então, por que o Bluetooth funciona nas placas da Intel?

Bem, isso é um pouco complicado e envolve observar o IOKit para ver como ele lida com dispositivos diferentes. O Bluetooth é, na verdade, bastante simples na maneira como interage com o sistema. Por ser geralmente conectado na trilha USB, dispositivos genéricos podem facilmente conectar-se ao IOKit e agir semi-nativamente (geralmente sem suporte ao Handoff, AirDrop etc.). O Wi-Fi, em contrapartida, é um bocado mais complicado por exigir suporte explícito ao dispositivo na `IO80211Family.kext`, então somente placas Broadcom ou Atheros possuem uma chance de funcionar.

Nos casos de reinicialização do Windows para o macOS, o firmware da placa pode permanecer ligado, permitindo suporte temporário para a placa. Para garantir que isso permaneça sempre, é possível usar uma *kext* de injeção de firmware como essa encontrada no repositório [IntelBluetoothFirmware](https://github.com/zxystd/IntelBluetoothFirmware) (em inglês).

## Bluetooth na BIOS

Para obter suporte do Bluetooth na BIOS, será necessário ter um dispositivo Bluetooth que suporte Proxy HID. A ideia do Proxy HID é criar uma pilha Bluetooth mínima, que é então usada para enganar a BIOS e fazê-la pensar que seu teclado Bluetooth é, na verdade, um teclado USB, por não existirem firmwares que de fato implementam Bluetooth nativamente.

Todas as placas da Apple suportam esse recurso nativamente, mas será necessário pesquisar caso a caso quando se tratar de outros dispositivos.

## Mantendo Chaves Bluetooth Entre Sistemas

Isso serve principalmente para dispositivos que têm somente um perfil Bluetooth, o que pode ser um pouco frustrante ao trocar entre sistemas operacionais. Ainda bem que temos isso:

* **[Dual Boot com Dispositivos Bluetooth](https://github.com/dortania/clover-laptop-guide/blob/master/extras/dual-booting-with-bluetooth-devices.md) (em inglês)**
