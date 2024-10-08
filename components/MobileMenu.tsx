import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import Link from "next/link";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className="md:hidden">☰</Button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-primary-light">
        <h2 className="text-xl font-bold p-4">Menü</h2>
        <div className="flex flex-col space-y-2 p-4">
          <Link href="/" className="text-lg" onClick={() => setOpen(false)}>
            Ana Sayfa
          </Link>
          <Link
            href="/hakkimizda"
            className="text-lg"
            onClick={() => setOpen(false)}
          >
            Hakkımızda
          </Link>
          <Link
            href="/projeler"
            className="text-lg"
            onClick={() => setOpen(false)}
          >
            Projeler
          </Link>
          <Link
            href="/iletisim"
            className="text-lg"
            onClick={() => setOpen(false)}
          >
            İletişim
          </Link>

          <Link
            href="/kulube-uye-ol"
            className="bg-purple-300 text-purple-800 font-semibold px-4 py-2 rounded-md hover:bg-purple-200 transition duration-300"
            onClick={() => setOpen(false)}
          >
            Kulübe Üye Ol
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
