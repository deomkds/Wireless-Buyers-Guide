# Adaptadores AirPort

Então, do que se tratam os adaptadores AirPort e porque são as placas preferidas? Bom, porque são placas genuínas da Apple, retiradas de MacBooks e iMacs. Isso significa que nenhuma configuração extra é necessária para fazê-las funcionar. O principal problema é que elas precisam de um adaptador para encaixá-las em placas-mãe de PCs e são geralmente maiores, o que as torna uma opção melhor para desktops do que para notebooks.

A melhor parte? **Não é preciso usar nenhuma kext!**

Observação:
* Ao comprar uma placa Wi-Fi e um adaptador, não seja burro que nem o deomkds¹ e certifique-se de que os conectores (*sockets*) das antenas são os corretos para a sua placa-mãe. Existem dois principais tipos de conectores:
  * MHF4: Comumente usado em placas Wi-Fi M.2 e em notebooks da Apple (MacBook Pro etc.).
  * U.FL: Comumente usado em placas Wi-Fi mPCIe e em desktops da Apple (iMac etc.).

¹Assim você evita gastar 200 reais à toa que nem eu fiz.

# Relação Placas vs Computadores

## **Placas Removíveis**

Que podem ser compradas e instaladas por conta própria:

* BCM943602CDP (Wi-Fi) + 20703A1 (BT 4.0): **Conector U.FL**
  * iMac16,x
  * iMac17,1
  * iMac18,x (módulo Bluetooth diferente: 20703A2 (BT 4.2))
* BCM94360CD (Wi-Fi) + 20702B0 (BT 4.0) + U.FL Connector
  * iMac14,x
  * iMac15,x
  * MacPro6,1
* BCM94331CD (Wi-Fi) + BRCM20702 (05AC:828b, BT 4.0): **Conector U.FL**
  * iMac13,x
* BCM94360CS2 (Wi-Fi) + BRCM20702 (05AC:821f, BT 4.0): **Conector MHF4**
  * MacBookAir5,x
  * MacBookAir6,x
  * MacBookAir7,x
* BCM943602CS (Wi-Fi) + 20703A1 (BT 4.0): **Conector MHF4**
  * MacBookPro12,x
* BCM94360CS (Wi-Fi) + 20702B0 (BT 4.0): **Conector MHF4**
  * Macmini7,x
  * MacBookPro11,x
* BCM94360CSAX + BRCM20702 (05AC:828c, BT 4.0): **Conector MHF4**
  * MacBookPro10,x
* BCM94350: **Conector MHF4**
  * MacBook8,1 - 4350C1, BT 4.0
  * MacBookPro13,x - 20703A2, BT 4.2
  * MacBookPro14,x - 4350, BT 4.2

<details>
<summary>Placas Wi-Fi Antigas</summary>

**Broadcom**:

* BCM4328
  * iMac5,1-9,1
  * MacBook3,1-4,1
  * MacBookAir1,1-2,1
* BCM4321
  * MacPro2,1
  * Macmini4,1
* BCM4322
  * MacBook5,1
  * MacBookPro5,1 e 7,1
  * MacBookAir3,1-5,1
  * MacPro5,1
* BCM43224
  * MacBook6,1
  * MacBookPro6,1
* BCM4331
  * Macmini5,x
  * MacBookPro8,x-10,x

**Atheros**:

* AR242X/AR542X
  * MacBook1,1
  * Macmini1,1-2,1
* AR5418
  * MacBook2,1
* AR928X
  * iMac10,1-11,x
  * MacPro3,1
* AR93XX
  * iMac12,x

</details>
<br>

## **Placas Soldadas/Proprietárias**

Placas personalizadas da Apple que ninguém mais tem. São SoCs da Broadcom com nomes específicos.

* BCM4364 (Wi-Fi) + 4364B0 (BT 5.0)
  * iMac19,x
  * Macmini8,1
  * MacBookPro15,x
  * iMacPro1,1 - 4364 (BT 4.2)
  * MacPro7,1 - 4364B3 (BT 5.0)

* BCM4355
  * MacBookAir8,1

# Como é o Visual de um Adaptador AirPort

![Adaptador PCIe (necessita de uma porta USB extra para Bluetooth)](https://i.imgur.com/AUtNhiB.jpg)

![Adaptador M.2 NGFF chave B+M (necessita de uma porta USB extra para Bluetooth)](https://i.imgur.com/MNt8xqq.jpg)

![Adaptador M.2 NGFF chave A+E](https://i.imgur.com/NLUpEl3.jpg)

![Adaptador Mini PCIe](https://i.imgur.com/wRaFDLt.jpg)
