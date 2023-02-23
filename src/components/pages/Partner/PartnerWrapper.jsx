import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import PartnerLeft from './PartnerLeft'
import PartnerRight from './PartnerRight'

function PartnerWrapper() {
  
  const PartnerWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 13.5rem;
    margin-top: 5rem;
    margin-bottom: 7rem;
    @media (min-width: 100px) and (max-width: 1100px) {
      flex-direction: column;
      gap: 1rem;
      margin-left: 0;
      margin-top: 2rem;
      margin-bottom: 2.5rem;
    }
  `

  return (
    <motion.div whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }} transition={{ duration: .5 }}>
      <PartnerWrapper>
        <PartnerLeft />
        <PartnerRight />
      </PartnerWrapper>
    </motion.div>
  )
}

export default PartnerWrapper