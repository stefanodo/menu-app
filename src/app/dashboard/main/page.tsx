import { SVGProps } from 'react';

export const metadata = {
    title: 'Admin Dashboard',
    description: 'cualquier cosa'
}

export default function MainPage() {
    return (
      <div key="1" className="flex flex-col min-h-screen">
        <main className="flex-1 p-4 bg-white">
            <h1 className="font-sans font-bold">
                PAGINA PRINCIPAL
            </h1>
        </main>
      </div>
    )
  }
  