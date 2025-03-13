# Notes




## Directory Structure

```
+---- Components
|   |   OptionsBar - Top bar with options
|   |   SidePanel
|   |   ContentArea
|   |   SectionContainer - Just title and space for multiple entries
|   |   SectionItem - Title, where, dates, description
|   |   LinkEntry - Icon + link
|   |   ListEntry - Bullet point list
|   |   
|   \---SidePanel
|           Image
|           ListEntry - Bullet point list
|   \---ContentArea
|           Section - Just title and space for multiple entries
|           Entry - Title, where, dates, description
|           
\---Views
        CV
```

## TODO

- [ ] Add translations
- [ ] Add dark mode
- [ ] All links should be in one file and be imported where needed
- [ ] Maybe it was cool to have icons for IST and maybe the companies
- [ ] Create scss file for typography
  - [ ] Paragraphs should be justified
- [ ] SectionEntry description should be slot
  - [ ] It would be cool to allow for markdown
- [ ] SectionEntry should allow links for the sub-title
- [ ] Adicionar link para o repositório deste site
- [ ] Add deploy pipeline