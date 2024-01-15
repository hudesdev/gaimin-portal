import { useState, useMemo, useEffect } from "react";

import Header from "../../components/Header";
import SimpleBar from 'simplebar-react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <>
      <SimpleBar forceVisible="x" autoHide={true} className="w-full h-screen">
        <Header />
        <div className="container">
          <div className='w-full flex'>
            {children}
          </div>
        </div>
      </SimpleBar>
    </>
  )
}
