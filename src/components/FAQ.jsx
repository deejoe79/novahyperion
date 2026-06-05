import { useState } from 'react'
import { faqs } from '../data/content'
import { Section } from './ui'

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="faq__item">
      <button className="faq__q" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
        {q}
        <span className="faq__sign">{open ? '–' : '+'}</span>
      </button>
      {open && <p className="faq__a">{a}</p>}
    </div>
  )
}

export default function FAQ() {
  return (
    <Section
      id="faq"
      label="FAQ"
      title="Frequently asked questions"
      intro="The questions we hear most often before a project starts."
    >
      <div className="faq">
        {faqs.map((f) => (
          <FaqItem key={f.q} {...f} />
        ))}
      </div>
    </Section>
  )
}
