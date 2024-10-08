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
      <SheetContent side="right" className="">
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
            className="py-2"
            onClick={() => setOpen(false)}
          >
            <Button className="m-0">Kulübe Üye Ol</Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
