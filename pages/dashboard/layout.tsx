import { useState, useMemo, useEffect } from "react";

import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <>
      <SimpleBar forceVisible="x" autoHide={true} className="w-full h-screen">
        {children}
      </SimpleBar>
    </>
  )
}
