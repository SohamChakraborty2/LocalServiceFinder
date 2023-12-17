import "../../styles/Application/application.css";
import SearchBar from "./SearchBar";
import React, { useState } from "react";
import ContactIcon from '../../assets/contact-icon.png'
import LocationIcon from '../../assets/location-icon.png'
import PhoneIcon from '../../assets/phone-icon.png'
import StarIcon from '../../assets/star-icon.png'
import { Link } from "react-router-dom";
import Diet from '../../assets/diet.png'
import Electric from '../../assets/electric.png'
import Haircut from '../../assets/haircut.png'
import MakeUp from '../../assets/makeup.png'
import Painting from '../../assets/painting.png'
import Pet from '../../assets/pet.png'
import Plumbing from '../../assets/plumbing.png'
import Window from '../../assets/window-cleaning.png'
import Yoga from '../../assets/yoga.png'
function Application() {
  const serviceDatabase = [
    {
      category: "Electrical services",
      professionals: [
        {
          name: "Rajesh Electricians",
          distance: 10,
          shopName: "Rajesh Electrical Solutions",
          phoneNumber: "9876543210",
          rating: 4.8,
        },
        {
          name: "Deepak Power Solutions",
          distance: 12,
          shopName: "Deepak Electric Services",
          phoneNumber: "8765432109",
          rating: 4.5,
        },
        {
          name: "Sharmila Electricals",
          distance: 15,
          shopName: "Sharmila Power House",
          phoneNumber: "7890123456",
          rating: 4.7,
        },
        {
          name: "Vishal Electric Works",
          distance: 18,
          shopName: "Vishal Electrical Repairs",
          phoneNumber: "8765410987",
          rating: 4.2,
        },
        {
          name: "Kiran Electrical Solutions",
          distance: 14,
          shopName: "Kiran Electricians",
          phoneNumber: "7654321098",
          rating: 4.6,
        },
        {
          name: "Amit Electrical Repairs",
          distance: 11,
          shopName: "Amit Power Services",
          phoneNumber: "6543210987",
          rating: 2.5,
        },
        {
          name: "Sonia Electrical Solutions",
          distance: 20,
          shopName: "Sonia Electric Services",
          phoneNumber: "8765432190",
          rating: 2.8,
        },
        // Add 1 more electrical service professional
        // ...
      ],
    },
    {
      category: "Plumbing repairs",
      professionals: [
        {
          name: "Sunita Plumbers",
          distance: 15,
          shopName: "Sunita Plumbing Repairs",
          phoneNumber: "8765432109",
          rating: 4.5,
        },
        {
          name: "Kumar Plumbing Solutions",
          distance: 10,
          shopName: "Kumar Pipes & Fittings",
          phoneNumber: "9876543210",
          rating: 4.3,
        },
        {
          name: "Priya Leak Fixers",
          distance: 12,
          shopName: "Priya Plumbing Services",
          phoneNumber: "7890123456",
          rating: 4.6,
        },
        {
          name: "Raj Plumb Tech",
          distance: 8,
          shopName: "Raj Plumbing Solutions",
          phoneNumber: "8765410987",
          rating: 4.4,
        },
        {
          name: "Vijay Plumbing Repairs",
          distance: 13,
          shopName: "Vijay Pipe Works",
          phoneNumber: "7654321098",
          rating: 3.2,
        },
        {
          name: "Neha Plumbing Services",
          distance: 17,
          shopName: "Neha Leak Fixers",
          phoneNumber: "6543210987",
          rating: 2.7,
        },
        {
          name: "Aman Plumbing Solutions",
          distance: 19,
          shopName: "Aman Plumbing Repairs",
          phoneNumber: "8765432190",
          rating: 3.5,
        },
        // Add 1 more plumbing repair professional
        // ...
      ],
    },
    {
      category: "Door installation and repair",
      professionals: [
        {
          name: "Vikram Door Services",
          distance: 8,
          shopName: "Vikram Doors",
          phoneNumber: "7890123456",
          rating: 4.2,
        },
        {
          name: "Shreya Door Works",
          distance: 10,
          shopName: "Shreya Door Installations",
          phoneNumber: "8765432109",
          rating: 4.5,
        },
        {
          name: "Karan Door Repairs",
          distance: 12,
          shopName: "Karan Door Tech",
          phoneNumber: "9876543210",
          rating: 4.8,
        },
        {
          name: "Anand Door Solutions",
          distance: 15,
          shopName: "Anand Doors and Windows",
          phoneNumber: "8765410987",
          rating: 3.4,
        },
        {
          name: "Rahul Door Installations",
          distance: 11,
          shopName: "Rahul Door Services",
          phoneNumber: "7654321098",
          rating: 3.8,
        },
        {
          name: "Suman Door Repairs",
          distance: 14,
          shopName: "Suman Door Works",
          phoneNumber: "6543210987",
          rating: 2.9,
        },
        {
          name: "Naveen Door Solutions",
          distance: 17,
          shopName: "Naveen Door Installations",
          phoneNumber: "8765432190",
          rating: 3.2,
        },
        // Add 1 more door installation and repair professional
        // ...
      ],
    },
    {
      category: "Carpentry and woodworking",
      professionals: [
        {
          name: "Anita Carpentry Works",
          distance: 12,
          shopName: "Anita Woodcraft",
          phoneNumber: "7654321098",
          rating: 4.6,
        },
        {
          name: "Ravi Wooden Creations",
          distance: 10,
          shopName: "Ravi Carpentry Studio",
          phoneNumber: "8765432109",
          rating: 4.4,
        },
        {
          name: "Pooja Woodcraft",
          distance: 15,
          shopName: "Pooja Carpentry Services",
          phoneNumber: "9876543210",
          rating: 4.7,
        },
        {
          name: "Suresh Wooden Designs",
          distance: 8,
          shopName: "Suresh Carpentry Works",
          phoneNumber: "7890123456",
          rating: 2.5,
        },
        {
          name: "Vijay Woodworks",
          distance: 14,
          shopName: "Vijay Carpentry Solutions",
          phoneNumber: "8765410987",
          rating: 3.6,
        },
        {
          name: "Neha Carpentry Studio",
          distance: 11,
          shopName: "Neha Wooden Creations",
          phoneNumber: "6543210987",
          rating: 2.8,
        },
        {
          name: "Rajesh Wood Innovations",
          distance: 13,
          shopName: "Rajesh Woodworks",
          phoneNumber: "8765432190",
          rating: 3.3,
        },
      ],
    },
    {
      category: "Painting services",
      professionals: [
        {
          name: "Rahul Painters",
          distance: 20,
          shopName: "Rahul Painting Services",
          phoneNumber: "8765410987",
          rating: 4.4,
        },
        {
          name: "Meera Paint Studio",
          distance: 18,
          shopName: "Meera Color Splash",
          phoneNumber: "7654321098",
          rating: 4.6,
        },
        {
          name: "Kunal Paint Works",
          distance: 15,
          shopName: "Kunal Paint Innovations",
          phoneNumber: "7890123456",
          rating: 4.5,
        },
        {
          name: "Radha Painters",
          distance: 22,
          shopName: "Radha Paint Express",
          phoneNumber: "9876543210",
          rating: 4.8,
        },
        {
          name: "Vivek Paint Studio",
          distance: 19,
          shopName: "Vivek Paint Services",
          phoneNumber: "8765432190",
          rating: 3.9,
        },
        {
          name: "Sonia Painting Works",
          distance: 16,
          shopName: "Sonia Paint Studio",
          phoneNumber: "6543210987",
          rating: 3.2,
        },
        {
          name: "Amit Paint Innovations",
          distance: 21,
          shopName: "Amit Painting Solutions",
          phoneNumber: "8765432109",
          rating: 2.9,
        },
      ],
    },
    {
      category: "Haircut and styling",
      professionals: [
        {
          name: "Priya Hair Studio",
          distance: 5,
          shopName: "Priya Salon",
          phoneNumber: "9876543210",
          rating: 4.9,
        },
        {
          name: "Vishal Hair Hub",
          distance: 8,
          shopName: "Vishal Style Studio",
          phoneNumber: "8765432109",
          rating: 4.3,
        },
        {
          name: "Suman Hair Works",
          distance: 6,
          shopName: "Suman Hair Boutique",
          phoneNumber: "7890123456",
          rating: 4.7,
        },
        {
          name: "Raj Styling Studio",
          distance: 4,
          shopName: "Raj Style Lounge",
          phoneNumber: "8765410987",
          rating: 3.8,
        },
        {
          name: "Kiran Beauty Salon",
          distance: 7,
          shopName: "Kiran Styling Studio",
          phoneNumber: "7654321098",
          rating: 3.5,
        },
        {
          name: "Aman Hair and Beauty",
          distance: 9,
          shopName: "Aman Beauty Salon",
          phoneNumber: "6543210987",
          rating: 3.1,
        },
        {
          name: "Neha Hair Lounge",
          distance: 3,
          shopName: "Neha Style Studio",
          phoneNumber: "8765432190",
          rating: 2.7,
        },
        // Add 1 more haircut and styling professional
        // ...
      ],
    },
    {
      category: "Event photography and videography",
      professionals: [
        {
          name: "Amit Event Studios",
          distance: 25,
          shopName: "Amit Photography & Videography",
          phoneNumber: "9876543210",
          rating: 4.2,
        },
        {
          name: "Sonia Capture Moments",
          distance: 30,
          shopName: "Sonia Event Photography",
          phoneNumber: "8765432109",
          rating: 4.8,
        },
        {
          name: "Vivek Cinematics",
          distance: 28,
          shopName: "Vivek Event Films",
          phoneNumber: "7890123456",
          rating: 3.7,
        },
        {
          name: "Meera Lens Magic",
          distance: 22,
          shopName: "Meera Photography Studio",
          phoneNumber: "8765410987",
          rating: 3.5,
        },
        {
          name: "Rahul Moments Captured",
          distance: 35,
          shopName: "Rahul Event Productions",
          phoneNumber: "7654321098",
          rating: 4.4,
        },
        {
          name: "Anita Visuals",
          distance: 32,
          shopName: "Anita Photography & Films",
          phoneNumber: "6543210987",
          rating: 2.9,
        },
        {
          name: "Ravi Cinematography",
          distance: 27,
          shopName: "Ravi Event Cinemas",
          phoneNumber: "8765432190",
          rating: 3.2,
        },
      ],
    },
    {
      category: "Software installation and troubleshooting",
      professionals: [
        {
          name: "Amit Tech Solutions",
          distance: 10,
          shopName: "Amit IT Services",
          phoneNumber: "9876543210",
          rating: 4.8,
        },
        {
          name: "Vivek Software Repairs",
          distance: 12,
          shopName: "Vivek IT Solutions",
          phoneNumber: "8765432109",
          rating: 4.5,
        },
        {
          name: "Sonia Software Wizards",
          distance: 15,
          shopName: "Sonia Tech Hub",
          phoneNumber: "7890123456",
          rating: 3.7,
        },
        {
          name: "Meera Tech Innovations",
          distance: 18,
          shopName: "Meera Software Studio",
          phoneNumber: "8765410987",
          rating: 3.5,
        },
        {
          name: "Rahul IT Services",
          distance: 14,
          shopName: "Rahul Tech Solutions",
          phoneNumber: "7654321098",
          rating: 4.6,
        },
        {
          name: "Anita Software Repairs",
          distance: 11,
          shopName: "Anita IT Repairs",
          phoneNumber: "6543210987",
          rating: 3.9,
        },
        {
          name: "Ravi Software Installations",
          distance: 20,
          shopName: "Ravi IT Services",
          phoneNumber: "8765432190",
          rating: 3.2,
        },
        // Add 1 more software installation and troubleshooting professional
        // ...
      ],
    },
    {
      category: "Personal training and fitness coaching",
      professionals: [
        {
          name: "Amit Fitness Studios",
          distance: 5,
          shopName: "Amit Fitness Hub",
          phoneNumber: "9876543210",
          rating: 4.9,
        },
        {
          name: "Sonia Fitness Center",
          distance: 8,
          shopName: "Sonia Wellness Studio",
          phoneNumber: "8765432109",
          rating: 4.3,
        },
        {
          name: "Vivek Personal Training",
          distance: 6,
          shopName: "Vivek Fitness Solutions",
          phoneNumber: "7890123456",
          rating: 4.7,
        },
        {
          name: "Meera Fit Life",
          distance: 4,
          shopName: "Meera Wellness Center",
          phoneNumber: "8765410987",
          rating: 4.5,
        },
        {
          name: "Rahul Fitness Coach",
          distance: 7,
          shopName: "Rahul Fit Studios",
          phoneNumber: "7654321098",
          rating: 3.8,
        },
        {
          name: "Anita Personal Trainer",
          distance: 9,
          shopName: "Anita Fitness Solutions",
          phoneNumber: "6543210987",
          rating: 3.5,
        },
        {
          name: "Ravi Wellness Coach",
          distance: 3,
          shopName: "Ravi Fit Life",
          phoneNumber: "8765432190",
          rating: 2.7,
        },
        // Add 1 more personal training and fitness coaching professional
        // ...
      ],
    },
    {
      category: "Web development and design",
      professionals: [
        {
          name: "Amit Web Solutions",
          distance: 15,
          shopName: "Amit Web Design Studio",
          phoneNumber: "9876543210",
          rating: 4.8,
        },
        {
          name: "Vivek Web Creations",
          distance: 12,
          shopName: "Vivek Web Development",
          phoneNumber: "8765432109",
          rating: 4.5,
        },
        {
          name: "Sonia Design Hub",
          distance: 18,
          shopName: "Sonia Web Designs",
          phoneNumber: "7890123456",
          rating: 3.7,
        },
        {
          name: "Meera Web Innovations",
          distance: 20,
          shopName: "Meera Design Studio",
          phoneNumber: "8765410987",
          rating: 3.5,
        },
        {
          name: "Rahul Web Solutions",
          distance: 14,
          shopName: "Rahul Web Development",
          phoneNumber: "7654321098",
          rating: 4.6,
        },
        {
          name: "Anita Web Creations",
          distance: 11,
          shopName: "Anita Design Studio",
          phoneNumber: "6543210987",
          rating: 3.9,
        },
        {
          name: "Ravi Design Studios",
          distance: 22,
          shopName: "Ravi Web Solutions",
          phoneNumber: "8765432190",
          rating: 3.2,
        },
        {
          name: "Vijay Web Development",
          distance: 19,
          shopName: "Vijay Web Creators",
          phoneNumber: "7654321098",
          rating: 4.2,
        },
        // Add 1 more web development and design professional
        // ...
      ],
    },
    {
      category: "Mobile app development",
      professionals: [
        {
          name: "Amit App Solutions",
          distance: 18,
          shopName: "Amit App Development",
          phoneNumber: "9876543210",
          rating: 4.4,
        },
        {
          name: "Vivek Mobile Apps",
          distance: 15,
          shopName: "Vivek App Innovations",
          phoneNumber: "8765432109",
          rating: 4.6,
        },
        {
          name: "Sonia App Creations",
          distance: 22,
          shopName: "Sonia Mobile Solutions",
          phoneNumber: "7890123456",
          rating: 3.5,
        },
        {
          name: "Meera App Developers",
          distance: 20,
          shopName: "Meera App Studios",
          phoneNumber: "8765410987",
          rating: 3.8,
        },
        {
          name: "Rahul Mobile Innovations",
          distance: 25,
          shopName: "Rahul App Designers",
          phoneNumber: "7654321098",
          rating: 4.1,
        },
        {
          name: "Anita App Studios",
          distance: 17,
          shopName: "Anita App Development",
          phoneNumber: "6543210987",
          rating: 3.9,
        },
        {
          name: "Ravi Mobile Solutions",
          distance: 19,
          shopName: "Ravi App Creators",
          phoneNumber: "8765432190",
          rating: 4.2,
        },
        // Add 1 more mobile app development professional
        // ...
      ],
    },
    {
      category: "Window cleaning",
      professionals: [
        {
          name: "Amit Window Cleaners",
          distance: 10,
          shopName: "Amit Window Services",
          phoneNumber: "9876543210",
          rating: 2.8,
        },
        {
          name: "Vivek Glass Cleaning",
          distance: 12,
          shopName: "Vivek Window Solutions",
          phoneNumber: "8765432109",
          rating: 3.1,
        },
        {
          name: "Sonia Window Washers",
          distance: 15,
          shopName: "Sonia Glass Cleaning",
          phoneNumber: "7890123456",
          rating: 2.9,
        },
        {
          name: "Meera Window Services",
          distance: 18,
          shopName: "Meera Window Cleaning",
          phoneNumber: "8765410987",
          rating: 3.2,
        },
        {
          name: "Rahul Crystal Clean",
          distance: 14,
          shopName: "Rahul Window Solutions",
          phoneNumber: "7654321098",
          rating: 3.5,
        },
        {
          name: "Anita Clear View",
          distance: 11,
          shopName: "Anita Window Cleaning",
          phoneNumber: "6543210987",
          rating: 2.7,
        },
        {
          name: "Ravi Window Wash",
          distance: 13,
          shopName: "Ravi Glass Cleaning",
          phoneNumber: "8765432190",
          rating: 3.4,
        },
      ],
    },
    {
      category: "Pet grooming",
      professionals: [
        {
          name: "Amit Pet Grooming",
          distance: 8,
          shopName: "Amit Grooming Services",
          phoneNumber: "9876543210",
          rating: 2.7,
        },
        {
          name: "Vivek Pet Salon",
          distance: 10,
          shopName: "Vivek Grooming Studio",
          phoneNumber: "8765432109",
          rating: 3.1,
        },
        {
          name: "Sonia Furry Friends",
          distance: 12,
          shopName: "Sonia Pet Grooming",
          phoneNumber: "7890123456",
          rating: 2.9,
        },
        {
          name: "Meera Paws and Claws",
          distance: 15,
          shopName: "Meera Pet Salon",
          phoneNumber: "8765410987",
          rating: 3.2,
        },
        {
          name: "Rahul Pet Spa",
          distance: 11,
          shopName: "Rahul Grooming Solutions",
          phoneNumber: "7654321098",
          rating: 3.5,
        },
        {
          name: "Anita Furry Companions",
          distance: 14,
          shopName: "Anita Pet Groomers",
          phoneNumber: "6543210987",
          rating: 2.7,
        },
        {
          name: "Ravi Pet Paradise",
          distance: 13,
          shopName: "Ravi Grooming Haven",
          phoneNumber: "8765432190",
          rating: 3.4,
        },
        // Add 1 more pet grooming professional
        // ...
      ],
    },
    {
      category: "Marketing strategy consulting",
      professionals: [
        {
          name: "Amit Marketing Consultants",
          distance: 15,
          shopName: "Amit Strategy Solutions",
          phoneNumber: "9876543210",
          rating: 3.8,
        },
        {
          name: "Vivek Marketing Innovators",
          distance: 12,
          shopName: "Vivek Consulting Group",
          phoneNumber: "8765432109",
          rating: 3.5,
        },
        {
          name: "Sonia Marketing Experts",
          distance: 18,
          shopName: "Sonia Strategy Consulting",
          phoneNumber: "7890123456",
          rating: 3.7,
        },
        {
          name: "Meera Marketing Pro",
          distance: 20,
          shopName: "Meera Consulting Solutions",
          phoneNumber: "8765410987",
          rating: 3.6,
        },
        {
          name: "Rahul Marketing Visionaries",
          distance: 14,
          shopName: "Rahul Marketing Services",
          phoneNumber: "7654321098",
          rating: 3.9,
        },
        {
          name: "Anita Strategic Marketers",
          distance: 11,
          shopName: "Anita Marketing Strategies",
          phoneNumber: "6543210987",
          rating: 3.2,
        },
        {
          name: "Ravi Marketing Gurus",
          distance: 19,
          shopName: "Ravi Marketing Solutions",
          phoneNumber: "8765432190",
          rating: 3.1,
        },
        // Add 1 more marketing strategy consulting professional
        // ...
      ],
    },
    {
      category: "Yoga instruction",
      professionals: [
        {
          name: "Amit Yoga Studio",
          distance: 8,
          shopName: "Amit Yoga Haven",
          phoneNumber: "9876543210",
          rating: 4.2,
        },
        {
          name: "Vivek Yoga Guru",
          distance: 10,
          shopName: "Vivek Yoga Institute",
          phoneNumber: "8765432109",
          rating: 4.5,
        },
        {
          name: "Sonia Yoga Wellness",
          distance: 12,
          shopName: "Sonia Yoga Sanctuary",
          phoneNumber: "7890123456",
          rating: 4.3,
        },
        {
          name: "Meera Yoga Bliss",
          distance: 15,
          shopName: "Meera Yoga Studio",
          phoneNumber: "8765410987",
          rating: 4.7,
        },
        {
          name: "Rahul Yoga Path",
          distance: 11,
          shopName: "Rahul Yoga Center",
          phoneNumber: "7654321098",
          rating: 4.6,
        },
        {
          name: "Anita Yoga Harmony",
          distance: 14,
          shopName: "Anita Yoga Solutions",
          phoneNumber: "6543210987",
          rating: 4.4,
        },
        {
          name: "Ravi Yoga Tranquility",
          distance: 13,
          shopName: "Ravi Yoga Haven",
          phoneNumber: "8765432190",
          rating: 4.8,
        },
        // Add 1 more yoga instruction professional
        // ...
      ],
    },
    {
      category: "Personal fitness training",
      professionals: [
        {
          name: "Amit Fitness Trainer",
          distance: 8,
          shopName: "Amit Fitness Solutions",
          phoneNumber: "9876543210",
          rating: 4.9,
        },
        {
          name: "Vivek Fitness Coach",
          distance: 10,
          shopName: "Vivek Personal Training",
          phoneNumber: "8765432109",
          rating: 4.3,
        },
        {
          name: "Sonia Fit Life",
          distance: 12,
          shopName: "Sonia Fitness Studio",
          phoneNumber: "7890123456",
          rating: 4.7,
        },
        {
          name: "Meera Fitness Guru",
          distance: 15,
          shopName: "Meera Wellness Center",
          phoneNumber: "8765410987",
          rating: 4.5,
        },
        {
          name: "Rahul Personal Trainer",
          distance: 11,
          shopName: "Rahul Fitness Solutions",
          phoneNumber: "7654321098",
          rating: 3.8,
        },
        {
          name: "Anita Fitness Studio",
          distance: 14,
          shopName: "Anita Personal Training",
          phoneNumber: "6543210987",
          rating: 3.5,
        },
        {
          name: "Ravi Wellness Coach",
          distance: 13,
          shopName: "Ravi Fit Life",
          phoneNumber: "8765432190",
          rating: 2.7,
        },
        // Add 1 more personal fitness training professional
        // ...
      ],
    },
    {
      category: "Nutrition consulting",
      professionals: [
        {
          name: "Amit Nutritionist",
          distance: 10,
          shopName: "Amit Nutrition Solutions",
          phoneNumber: "9876543210",
          rating: 4.8,
        },
        {
          name: "Vivek Nutrition Expert",
          distance: 12,
          shopName: "Vivek Nutrition Wellness",
          phoneNumber: "8765432109",
          rating: 4.5,
        },
        {
          name: "Sonia Wellness Nutrition",
          distance: 15,
          shopName: "Sonia Nutrition Consulting",
          phoneNumber: "7890123456",
          rating: 3.7,
        },
        {
          name: "Meera Nutrition Solutions",
          distance: 18,
          shopName: "Meera Nutrition Studio",
          phoneNumber: "8765410987",
          rating: 3.5,
        },
        {
          name: "Rahul Nutrition Coach",
          distance: 14,
          shopName: "Rahul Nutrition Innovations",
          phoneNumber: "7654321098",
          rating: 4.6,
        },
        {
          name: "Anita Health and Nutrition",
          distance: 11,
          shopName: "Anita Nutrition Studio",
          phoneNumber: "6543210987",
          rating: 3.9,
        },
        {
          name: "Ravi Nutrition Wellness",
          distance: 20,
          shopName: "Ravi Health and Nutrition",
          phoneNumber: "8765432190",
          rating: 3.2,
        },
        // Add 1 more nutrition consulting professional
        // ...
      ],
    },
    {
      category: "Makeup artist services",
      professionals: [
        {
          name: "Amit Makeup Studio",
          distance: 18,
          shopName: "Amit Beauty Solutions",
          phoneNumber: "9876543210",
          rating: 4.4,
        },
        {
          name: "Vivek Glamour Beauty",
          distance: 15,
          shopName: "Vivek Makeup Innovations",
          phoneNumber: "8765432109",
          rating: 4.6,
        },
        {
          name: "Sonia Beauty Creations",
          distance: 22,
          shopName: "Sonia Makeup Studio",
          phoneNumber: "7890123456",
          rating: 3.5,
        },
        {
          name: "Meera Glamour Looks",
          distance: 20,
          shopName: "Meera Makeup Studio",
          phoneNumber: "8765410987",
          rating: 3.8,
        },
        {
          name: "Rahul Makeup Artistry",
          distance: 25,
          shopName: "Rahul Beauty Lounge",
          phoneNumber: "7654321098",
          rating: 4.1,
        },
        {
          name: "Anita Beauty Express",
          distance: 17,
          shopName: "Anita Makeup Solutions",
          phoneNumber: "6543210987",
          rating: 3.9,
        },
        {
          name: "Ravi Glamour Makeup",
          distance: 19,
          shopName: "Ravi Makeup Studio",
          phoneNumber: "8765432190",
          rating: 4.2,
        },
        // Add 1 more makeup artist services professional
        // ...
      ],
    },
  ];
  const dataArray = JSON.parse(localStorage.getItem("userData"));

  dataArray.forEach((provider) => {
    if (provider.utype === "Provider" && provider.services) {
      const category = serviceDatabase.find(
        (category) => category.category === provider.services
      );
      if (category) {
        const randomDistance = Math.floor(Math.random() * 10) + 1;
        const randomRating = Math.random() * 4 + 1;
        category.professionals.unshift({
          name: provider.fname + " " + provider.lname,
          distance: randomDistance,
          shopName: provider.bname,
          phoneNumber: provider.phone,
          rating: randomRating.toFixed(1),
        });
      }
    }
  });
  function Header() {
    return (
      <header>
        <h3>Local Service Finder</h3>

        <SearchBar
          categories={serviceDatabase.map((category) => category.category)}
          onSelect={handleCategorySelect}
        />
        <button>
          <Link to='/'>Sign Out</Link>
        </button>
      </header>
    )
  }

  function Presets() {
    return (
      <div className="presets">
        <h2>Home services at <br /> your doorstep</h2>
        <div className="preset-section">
          <h3>What are you looking for?</h3>
          <div className="container">
            <div><img src={Electric} alt="" /><p>Electrical Services</p></div>
            <div><img src={Plumbing} alt="" /><p>Plumbing Repairs</p></div>
            <div><img src={Painting} alt="" /><p>Painting Services</p></div>
            <div><img src={Haircut} alt="" /><p>Haircut and Styling</p></div>
            <div><img src={Pet} alt="" /><p>Pet grooming</p></div>
            <div><img src={Window} alt="" /><p>Windows cleaning</p></div>
            <div><img src={Yoga} alt="" /><p>Yoga instruction</p></div>
            <div><img src={Diet} alt="" /><p>Nutrition consulting</p></div>
            <div><img src={MakeUp} alt="" /><p>Make up artist services</p></div>
          </div>
        </div>
      </div>
    )
  }

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const renderProfessionalDetails = () => {
    if (selectedCategory) {
      const categoryData = serviceDatabase.find(
        (category) => category.category === selectedCategory
      );

      return (
        <div className="details-section">
          <h2>{selectedCategory}</h2>
          <ul>
            {categoryData.professionals.map((professional) => (
              <li key={professional.name}>
                <div> {professional.shopName}</div>
                <div className="row">
                  <div><img src={LocationIcon} /> {professional.distance} km</div>
                  <div><img src={PhoneIcon} /> <a href={'https://wa.me/+91' + professional.phoneNumber} >{professional.phoneNumber}</a></div>
                  <div><img src={StarIcon} /> {professional.rating}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    return null;
  };

  return (
    <>
      <Header />
      <div className="hero">
        <Presets />
        {renderProfessionalDetails()}
      </div>
    </>
  );
}

export default Application;
