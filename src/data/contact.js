// I-edit dito ang totoong contact details mo — gagamitin sa buong site.
// IWAN na blangko ('') ang email kung wala pa — awtomatikong magdi-disable/
// matatago ang lahat ng email buttons, at Facebook na lang ang contact.
export const contact = {
  email: '', // <-- ilagay ang totoong email kapag meron na (blangko = naka-disable)
  facebookUrl: 'https://facebook.com/rsvplounge', // <-- palitan ng FB page link mo
  facebookLabel: 'RSVP Lounge', // <-- ipapakitang text
}

export const mailtoInquiry = contact.email
  ? `mailto:${contact.email}?subject=Invitation%20Inquiry`
  : ''
