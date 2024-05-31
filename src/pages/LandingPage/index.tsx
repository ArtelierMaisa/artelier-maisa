import { useState } from 'react';
import { Header, Modal } from '../../components';
import { PRIMARY_LOGO, SECONDARY_LOGO } from '../../config';

export function LandingPage() {
  const [isOpen, setIsOpen] = useState<boolean>(true)

  return (
    <>
      <Header linkActive={null} />

      <Modal 
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        product={{
          description: "description", 
          id: '123', 
          images: [
            {id: '123', uri: PRIMARY_LOGO}, 
            {id: '456', uri: SECONDARY_LOGO}
          ], 
          price: 'R$ 49,90', 
          size: '20cmx15cm', 
          title: "title", 
          weight: "50kg", 
          material: 'Madeira',
          whatsapp: "5547996507698"
        }} 
      />
    </>
  )
}
