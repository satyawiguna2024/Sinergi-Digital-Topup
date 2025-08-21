import {
  DanaIC,
  GopayIC,
  QrisIC,
  ShoopePayIC,
  BcaIC,
  BniIC,
  BriIC,
  BsiIC,
  MandiriIC,
} from "../../assets/icons/payments/index";

export const payments = [
    {
      title: "QRIS",
      logos: [QrisIC],
      content: "Scan QR Code untuk melakukan pembayaran",
      card_detail: [{ price: 30000, name_payment: "QRIS" }],
    },
    {
      title: "E - Wallet",
      logos: [GopayIC, DanaIC, ShoopePayIC],
      content: "Pilih salah satu E-Wallet untuk pembayaran",
      card_detail: [
        { price: 10000, name_payment: "Gopay" },
        { price: 10200, name_payment: "Dana" },
        { price: 9800, name_payment: "ShopeePay" },
      ],
    },
    {
      title: "Virtual Account",
      logos: [BcaIC, BniIC, BriIC, MandiriIC, BsiIC],
      content: "Gunakan Virtual Account sesuai bank pilihan",
      card_detail: [
        { price: 10000, name_payment: "BCA" },
        { price: 10200, name_payment: "BNI" },
        { price: 9900, name_payment: "BRI" },
        { price: 10100, name_payment: "Mandiri" },
        { price: 10000, name_payment: "BSI" },
      ],
    },
  ];