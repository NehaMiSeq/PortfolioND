# Portfolio Website Guide

Welcome to your portfolio website! This guide will help you customize and update your content.

## 🎨 Theme Colors

Your portfolio uses a warm color palette with:
- **Primary**: Deep purple (professional, creative)
- **Accent**: Warm orange (energetic, approachable)
- **Secondary**: Rose/burgundy tones
- **Dark/Light Mode**: Fully supported with theme toggle

## 📝 Content to Update

### 1. Hero Section (`components/hero.tsx`)

**Profile Image:**
- Upload your photo via the Assets panel (left sidebar)
- Update line 28-32 to use your image instead of the "ND" placeholder

**Social Links:**
- Line 68-72: Update LinkedIn URL
- Line 79-83: Update GitHub URL
- Line 90: Email link (connects to Contact section)

**Resume Download:**
- Upload your resume PDF to the `public` folder
- Update line 60-65 to link to your resume file

### 2. About Section (`components/about.tsx`)

**Profile Photo:**
- Upload via Assets panel
- Update line 21-27 to display your photo

**Bio Text:**
- Lines 33-58: Customize the about text to reflect your personal story
- Keep the structure but make it your own

### 3. Education Section (`components/education.tsx`)

Update the `educationData` array (lines 7-35) with your actual degrees:
```typescript
{
  degree: "Your Degree Name",
  specialization: "Your Specialization",
  institution: "Your University",
  year: "2015-2019",
  icon: GraduationCap,
  color: "primary",
}
```

### 4. Skills Section (`components/skills.tsx`)

Update `skillCategories` array (lines 17-62) to match your actual skills. You can:
- Add or remove skills from each category
- Modify category names
- Add new categories if needed

### 5. Projects Section (`components/projects.tsx`)

Update the `projects` array (lines 23-88) with your actual projects:

**Research Publications:**
```typescript
{
  title: "Your Publication Title",
  description: "Brief description and key findings",
  category: "research",
  tags: ["Biochemistry", "R Programming"],
  link: "https://journal-link.com",
  type: "research",
}
```

**Data Analytics Projects:**
```typescript
{
  title: "Project Name",
  description: "What you analyzed and discovered",
  category: "data",
  tags: ["Python", "Jupyter", "Pandas"],
  github: "https://github.com/yourusername/repo",
  type: "data",
}
```

**Creative Work:**
```typescript
{
  title: "Portfolio/Video Title",
  description: "Description of your creative work",
  category: "creative",
  tags: ["Photography", "Photoshop"],
  link: "https://your-portfolio-link.com",
  type: "creative",
}
```

### 6. Experience Section (`components/experience.tsx`)

Update the `experiences` array (lines 17-68) with:
- Your actual job titles and organizations
- Correct dates/periods
- Real achievements and responsibilities
- Update business name on line 35

### 7. Contact Section (`components/contact.tsx`)

Update `contactInfo` array (lines 9-32) with your actual contact details:
- Email address
- LinkedIn profile URL
- GitHub profile URL
- Phone number (optional)

Also update:
- Line 88: Email link in the CTA button
- Line 95: Resume download link

### 8. Footer (`components/footer.tsx`)

Update social media links:
- Line 59: LinkedIn URL
- Line 67: GitHub URL
- Line 75: Email address

## 📸 Adding Images

### Profile Photos
1. Click "Assets" in the left sidebar
2. Upload your images
3. Copy the filename from Assets
4. Update the image paths in components

### Food Photography
1. Upload 3-6 of your best food photos via Assets
2. Create a gallery component or link to external portfolio
3. Update the Creative Work project with links

## 📄 Adding Your Resume

1. Save your resume as a PDF
2. Upload it to the `public` folder (name it `Neha_Durugkar_Resume.pdf`)
3. Update download links in:
   - `components/hero.tsx` (line 60-65)
   - `components/contact.tsx` (line 95)

Replace the alert with:
```typescript
onClick={() => window.open('/Neha_Durugkar_Resume.pdf', '_blank')}
```

## 🔗 External Links to Add

Prepare these links:
- [ ] LinkedIn profile URL
- [ ] GitHub profile URL
- [ ] Research publication links
- [ ] E-commerce analysis GitHub repository
- [ ] Photoshop presentation links (Google Drive, Dropbox, etc.)
- [ ] Business video links (YouTube, Vimeo)
- [ ] Food photography portfolio link

## 🎯 Quick Customization Checklist

- [ ] Upload profile photo via Assets
- [ ] Update education details with actual degrees
- [ ] Add research publication links
- [ ] Add GitHub repository link for e-commerce project
- [ ] Update contact information (email, LinkedIn, GitHub, phone)
- [ ] Upload resume PDF
- [ ] Update social media links throughout
- [ ] Add food photography images
- [ ] Add Photoshop presentation links
- [ ] Add business video links
- [ ] Update experience dates and organization names
- [ ] Customize about section bio

## 🚀 Testing Your Changes

After making updates:
1. Save all files
2. Check the preview browser
3. Test dark/light mode toggle
4. Test all navigation links
5. Test project filter buttons
6. Verify all external links work
7. Test on mobile view (responsive design)

## 💡 Tips

- Keep descriptions concise but informative
- Use high-quality images (optimize for web)
- Test all links before sharing
- Update content regularly with new projects
- Maintain consistent tone across sections

## 🆘 Need Help?

If you need to make changes beyond content updates:
- Component files are in `/components`
- Main page is in `/app/page.tsx`
- Styles are in `/app/globals.css`
- Theme colors can be adjusted in `globals.css`

---

**Remember:** This is YOUR portfolio. Make it reflect your unique journey and personality!
