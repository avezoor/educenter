# EduCenter Diabetes - Website Edukasi Diabetes Mellitus

## Overview
EduCenter Diabetes adalah website edukasi komprehensif tentang Diabetes Mellitus yang dirancang dengan UI modern, responsif, dan animasi yang halus. Website ini menyediakan informasi lengkap tentang diabetes, kuis interaktif untuk menguji pengetahuan, panduan menu sehat, dan fitur konsultasi.

## Features

### 1. **Hero Section**
- Gradient background dengan animasi smooth
- Dual CTA buttons untuk navigasi cepat
- Animated scroll indicator
- Fully responsive design

### 2. **Pusat Informasi Diabetes (EduCenter)**
- Informasi lengkap tentang Diabetes Mellitus
- Jenis-jenis diabetes dengan icon visualization (Lucide React)
- Expandable accordion sections untuk:
  - Gejala umum diabetes
  - Faktor risiko
  - Pemeriksaan dan diagnosis
  - Pencegahan diabetes
  - Komplikasi diabetes
- Smooth scroll-triggered animations

### 3. **Kuis Pengetahuan Interaktif**
- 10 pertanyaan pilihan ganda tentang diabetes
- Real-time feedback dengan visual indicators (checkmark/x)
- Progress bar dengan percentage display
- Instant scoring dengan kategori hasil:
  - 9-10 benar: Sangat Baik
  - 6-8 benar: Cukup Baik
  - 3-5 benar: Perlu Belajar Lagi
  - <3 benar: Mari Belajar Lagi
- Hasil quiz tersimpan di backend (in-memory storage)
- Toast notifications untuk feedback
- Restart quiz functionality

### 4. **Pilihan Menu Sehat**
- 4 kategori menu (Sarapan, Makan Siang, Camilan Sore, Makan Malam)
- Visual cards dengan icons untuk setiap waktu makan
- Image placeholders untuk gambar makanan
- Tips nutrisi (Karbohidrat, Protein, Serat)
- Catatan penting tentang pola makan sehat

### 5. **Konsultasi**
- Direct WhatsApp integration (+62 831-5214-0913)
- Email contact (ichazhd866@gmail.com)
- Large, accessible contact buttons
- Informasi jam konsultasi

### 6. **Navigation & UX**
- Sticky header dengan smooth scroll
- Mobile-responsive hamburger menu
- Smooth scroll to sections
- Hover effects dan animations menggunakan Framer Motion
- Loading states untuk semua interactive elements

## Tech Stack

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** untuk styling
- **Shadcn UI** components (Cards, Buttons, Accordion, Progress, etc.)
- **Framer Motion** untuk animations
- **Lucide React** untuk icons
- **Wouter** untuk routing
- **TanStack Query** untuk state management dan API calls

### Backend
- **Express.js** server
- **In-memory storage** (MemStorage) untuk quiz results
- **Zod** untuk validation
- **TypeScript** untuk type safety

### Design System
- **Primary Color**: Teal/Green (#3db89e) - healthcare/wellness
- **Secondary Color**: Blue (#4299e1) - trust/professional
- **Accent Color**: Amber (#f5b731) - warmth/attention
- **Font**: Inter (headings/UI), Source Sans Pro (body text)
- **Animations**: Fade-in, slide-up, stagger children
- **Responsive**: Mobile-first approach

## Project Structure

```
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.tsx          # Sticky navigation
│   │   │   ├── Hero.tsx            # Landing section
│   │   │   ├── EducationHub.tsx    # Info diabetes
│   │   │   ├── Quiz.tsx            # Interactive quiz
│   │   │   ├── MealPlanning.tsx    # Menu sehat
│   │   │   ├── Contact.tsx         # Konsultasi
│   │   │   └── Footer.tsx          # Footer
│   │   ├── pages/
│   │   │   └── Home.tsx            # Main page
│   │   └── index.css               # Global styles
├── server/
│   ├── routes.ts                   # API endpoints
│   └── storage.ts                  # In-memory storage
├── shared/
│   └── schema.ts                   # Shared types & schemas
└── replit.md                       # This file
```

## API Endpoints

### POST `/api/quiz-results`
Submit quiz results
- **Body**: `{ score: number, totalQuestions: number, answers: string }`
- **Response**: QuizResult object with id and completedAt timestamp

### GET `/api/quiz-results`
Get all quiz results
- **Response**: Array of QuizResult objects

## Recent Changes
- **2025-10-29**: Initial implementation
  - Created comprehensive diabetes education website
  - Implemented interactive quiz with backend integration
  - Added smooth animations and transitions
  - Configured healthcare-focused design system
  - Added WhatsApp and Email consultation integration

## User Preferences
- Modern, clean UI with healthcare focus
- Smooth animations (not too aggressive)
- Fully responsive across all devices
- Accessible design with proper contrast
- Indonesian language throughout

## Running the Project
The workflow "Start application" runs `npm run dev` which starts both:
- Express backend server
- Vite frontend development server

Both run on the same port with Vite proxy configuration.

## Future Enhancements
- User accounts for tracking quiz history
- BMI calculator and diabetes risk assessment
- Downloadable PDF guides
- Blog/article section with latest research
- Appointment booking system
- Data visualization for quiz statistics
- Multi-language support (English)
- Dark mode toggle
