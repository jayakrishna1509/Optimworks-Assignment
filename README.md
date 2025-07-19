# Optimworks-Assignment

## Interview Assignment: Comprehensive Hospital & Appointment Management System Design

1) Objective: Design and outline a simplified, yet robust, Hospital & Appointment Management System. This assignment evaluates your proficiency in system design, data modeling, API design, and critical thinking, with a keen eye on how you leverage modern AI tools in a practical development context.

2) Scenario: You are tasked with designing the core components of a system that facilitates the registration and management of hospitals, doctors, and patients, enabling seamless appointment booking and revenue tracking.

## Core Entities, User Roles, and Their Interactions:
1)System Users & Registration:
Hospital Admin:
Can register a new Hospital (providing its name and location).
Can define and manage Departments within their hospital.
Doctor:Can register themselves, providing their name, qualifications, specializations (a doctor can have multiple), and years of experience.
After registration, a doctor can associate with a specific hospital (registered by an admin). This association is contingent on the hospital having departments that match the doctor's specializations.
For each hospital they associate with, doctors can register their availability time slots (e.g., specific dates and times).
Crucially, a doctor cannot register conflicting time slots that overlap across different hospitals.
For each hospital, doctors specify their consultation fee. This fee can vary for the same doctor across different hospitals.
Patient (User): Can register by providing their name, gender, date of birth, and a unique ID (e.g., Aadhar, Passport).

2)Hospitals:
Each hospital has a unique name and location.
Each hospital consists of multiple Departments (e.g., Cardiology, Orthopedics, Pediatrics).
Multiple doctors can be affiliated with each department within a hospital.

3)Doctors:
As mentioned above, doctors define their unique specializations, qualifications, and experience.
Their availability is defined by specific time slots for each associated hospital.
Their consultation fee is set per hospital.
Revenue Sharing: For every consultation, 60% of the consultation fee goes to the doctor, and 40% goes to the hospital.
]
4)Patient Flow & Booking:
After registration, patients can search and filter doctors by specialization, hospital, and availability.
Patients can view a doctor's available time slots at a chosen hospital.
Patients can select and book an available time slot. Once a slot is booked, it becomes unavailable.
Note: You do not need to implement a payment gateway. For the purpose of this assignment, assume the patient simply "enters" the consultation amount when booking, and it's recorded.

## Viewing & Reporting Capabilities:
- Hospital Admin Dashboard: Hospitals can view:
A list of all associated doctors.
Total consultations booked within the hospital.
Total revenue generated for the hospital.
Revenue generated per doctor (associated with that hospital).
Revenue generated per department (within that hospital).

- Doctor Dashboard: Doctors can view:
Their total earnings from consultations (across all hospitals).
Their total number of consultations.
Their earnings broken down by each associated hospital.

- Patient History: Patients can view their complete consultation records across all hospitals and all doctors they have visited.
