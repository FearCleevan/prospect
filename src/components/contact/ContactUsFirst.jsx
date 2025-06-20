import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './ContactUsFirst.module.css';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby65uCbhJb-1DuJsKhUU96whXafi44LJlFEQY62Es-wiQcTCM96iTCsPcJTfy8CB5effw/exec';

const areaOptions = [
    'Lead Generation',
    'Medical Billing',
    'Customer Service',
    'Virtual Assistant'
];

const employeeOptions = [
    'Below 10',
    '10-50',
    '51-100',
    '101-500',
    '501+'
];

const timezoneOptions = [
    'Eastern Time',
    'Central Time',
    'Mountain Time',
    'Pacific Time',
];

export default function ContactUsFirst() {
    const [form, setForm] = useState({
        firstname: '',
        lastname: '',
        phone: '',
        mobile: '',
        email: '',
        areas: [],
        otherAreas: '',
        companyName: '',
        companyWebsite: '',
        employees: '',
        appointmentDate: null,
        appointmentTime: '09:00 AM',
        timezone: '',
    });

    const [step, setStep] = useState(1);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [submitError, setSubmitError] = useState(null);

    // Custom DatePicker input component
    const CustomDateInput = ({ value, onClick }) => (
        <input
            type="text"
            className={errors.appointmentDate ? `${styles.dateInput} ${styles.inputError}` : styles.dateInput}
            onClick={onClick}
            value={value}
            readOnly
            placeholder="Select a date"
        />
    );

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            let updatedAreas = [...form.areas];
            if (checked) {
                updatedAreas.push(value);
            } else {
                updatedAreas = updatedAreas.filter(a => a !== value);
            }
            setForm({ ...form, areas: updatedAreas });
        } else {
            setForm({ ...form, [name]: value });
        }

        // Clear error when changing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleDateChange = (date) => {
        setForm({ ...form, appointmentDate: date });
        if (errors.appointmentDate) {
            setErrors(prev => ({ ...prev, appointmentDate: '' }));
        }
    };

    const validateStep = () => {
        const stepErrors = {};
        if (step === 1) {
            if (!form.firstname) stepErrors.firstname = 'Required';
            if (!form.lastname) stepErrors.lastname = 'Required';
            if (!form.email) stepErrors.email = 'Required';
        }
        if (step === 2) {
            if (form.areas.length === 0 && !form.otherAreas.trim()) {
                stepErrors.areas = 'Please select at least one area or specify other areas.';
            }
        }
        if (step === 3) {
            if (!form.companyName) stepErrors.companyName = 'Required';
            if (!form.employees) stepErrors.employees = 'Required';
        }
        if (step === 4) {
            if (!form.appointmentDate) stepErrors.appointmentDate = 'Required';
            if (!form.timezone) stepErrors.timezone = 'Required';
        }
        setErrors(stepErrors);
        return Object.keys(stepErrors).length === 0;
    };

    const handleNext = () => {
        if (validateStep()) {
            setStep(s => s + 1);
        }
    };

    const handlePrev = () => setStep(s => s - 1);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateStep()) return;

        setIsSubmitting(true);
        setSubmitError(null);

        // Format date for submission
        const formattedDate = form.appointmentDate
            ? form.appointmentDate.toISOString().split('T')[0]
            : '';

        const submissionData = {
            ...form,
            areas: form.areas.join(', '),
            appointmentDate: formattedDate,
            submitDate: new Date().toISOString().split('T')[0],
            submitTime: new Date().toLocaleTimeString(),
        };

        try {
            const formData = new URLSearchParams();
            for (const key in submissionData) {
                formData.append(key, submissionData[key]);
            }

            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: formData.toString(),
            });

            if (!response.ok) throw new Error('Network response was not ok');

            const result = await response.json();
            if (!result.success) throw new Error(result.error || 'Submission failed');

            setShowSuccessModal(true);

        } catch (error) {
            console.error('Submission error:', error);
            setSubmitError(error.message || 'There was an error submitting your form. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleSuccessModalClose = () => {
        setShowSuccessModal(false);
        setForm({
            firstname: '',
            lastname: '',
            phone: '',
            mobile: '',
            email: '',
            areas: [],
            otherAreas: '',
            companyName: '',
            companyWebsite: '',
            employees: '',
            appointmentDate: null,
            appointmentTime: '09:00 AM',
            timezone: '',
        });
        setStep(1);
    };

    function renderStep1() {
        return (
            <>
                <div className={styles.stepper}>
                    {[1, 2, 3, 4].map((num) =>
                        <div key={num} className={`${styles.step} ${step === num ? styles.active : ''}`}>{num}</div>
                    )}
                </div>
                <div className={styles.formRow}>
                    <div className={styles.formCol}>
                        <label>
                            Firstname <span className={styles.required}>*</span>
                            <input
                                type="text"
                                name="firstname"
                                value={form.firstname}
                                onChange={handleChange}
                                className={errors.firstname ? styles.inputError : ''}
                                placeholder="Firstname"
                            />
                        </label>
                        {errors.firstname && <div className={styles.errorMsg}>{errors.firstname}</div>}
                    </div>
                    <div className={styles.formCol}>
                        <label>
                            Lastname <span className={styles.required}>*</span>
                            <input
                                type="text"
                                name="lastname"
                                value={form.lastname}
                                onChange={handleChange}
                                className={errors.lastname ? styles.inputError : ''}
                                placeholder="Lastname"
                            />
                        </label>
                        {errors.lastname && <div className={styles.errorMsg}>{errors.lastname}</div>}
                    </div>
                </div>
                <div className={styles.formRow}>
                    <div className={styles.formCol}>
                        <label>
                            Phone Number
                            <input
                                type="text"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                placeholder="Phone Number"
                            />
                        </label>
                    </div>
                    <div className={styles.formCol}>
                        <label>
                            Mobile Number
                            <input
                                type="text"
                                name="mobile"
                                value={form.mobile}
                                onChange={handleChange}
                                placeholder="Mobile Number"
                            />
                        </label>
                    </div>
                    <div className={styles.formCol}>
                        <label>
                            Email <span className={styles.required}>*</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                className={errors.email ? styles.inputError : ''}
                                placeholder="Email"
                            />
                        </label>
                        {errors.email && <div className={styles.errorMsg}>{errors.email}</div>}
                    </div>
                </div>
                <button type="button" className={styles.nextBtn} onClick={handleNext}>Next &rarr;</button>
            </>
        );
    }

    function renderStep2() {
        return (
            <>
                <div className={styles.stepper}>
                    {[1, 2, 3, 4].map((num) =>
                        <div key={num} className={`${styles.step} ${step === num ? styles.active : ''}`}>{num}</div>
                    )}
                </div>
                <div className={styles.formRow}>
                    <div className={styles.checkboxSection}>
                        <label>
                            What areas do you need help with?
                            <div className={styles.checkboxGrid}>
                                <div className={styles.checkboxRow}>
                                    {areaOptions.slice(0, 2).map(opt => (
                                        <label key={opt} className={styles.checkboxLabel}>
                                            <input
                                                type="checkbox"
                                                name="areas"
                                                value={opt}
                                                checked={form.areas.includes(opt)}
                                                onChange={handleChange}
                                            />
                                            {opt}
                                        </label>
                                    ))}
                                </div>
                                <div className={styles.checkboxRow}>
                                    {areaOptions.slice(2, 4).map(opt => (
                                        <label key={opt} className={styles.checkboxLabel}>
                                            <input
                                                type="checkbox"
                                                name="areas"
                                                value={opt}
                                                checked={form.areas.includes(opt)}
                                                onChange={handleChange}
                                            />
                                            {opt}
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </label>
                    </div>

                    <div className={styles.textareaSection}>
                        <label>
                            Other areas you need help with?
                            <textarea
                                name="otherAreas"
                                value={form.otherAreas}
                                onChange={handleChange}
                                placeholder="Suggestion: 1. Target Industries, Location, etc."
                                className={styles.customTextarea}
                            />
                        </label>
                    </div>
                </div>
                {errors.areas && <div className={styles.errorMsg}>{errors.areas}</div>}
                <div className={styles.buttonRow}>
                    <button type="button" className={styles.prevBtn} onClick={handlePrev}>&larr; Previous</button>
                    <button type="button" className={styles.nextBtn} onClick={handleNext}>Next &rarr;</button>
                </div>
            </>
        );
    }

    function renderStep3() {
        return (
            <>
                <div className={styles.stepper}>
                    {[1, 2, 3, 4].map((num) =>
                        <div key={num} className={`${styles.step} ${step === num ? styles.active : ''}`}>{num}</div>
                    )}
                </div>
                <div className={styles.formRow}>
                    <div className={styles.formCol}>
                        <label>
                            Company Name <span className={styles.required}>*</span>
                            <input
                                type="text"
                                name="companyName"
                                value={form.companyName}
                                onChange={handleChange}
                                className={errors.companyName ? styles.inputError : ''}
                                placeholder="Company Name"
                            />
                        </label>
                        {errors.companyName && <div className={styles.errorMsg}>{errors.companyName}</div>}
                    </div>
                    <div className={styles.formCol}>
                        <label>
                            Company Website
                            <input
                                type="text"
                                name="companyWebsite"
                                value={form.companyWebsite}
                                onChange={handleChange}
                                placeholder="Company Website"
                            />
                        </label>
                    </div>
                </div>
                <div className={styles.formRow}>
                    <div className={styles.formColWide}>
                        <label>
                            Select a range of employees: <span className={styles.required}>*</span>
                            <select
                                name="employees"
                                value={form.employees}
                                onChange={handleChange}
                                className={errors.employees ? styles.inputError : ''}
                            >
                                <option value="">Select...</option>
                                {employeeOptions.map(opt =>
                                    <option key={opt} value={opt}>{opt}</option>
                                )}
                            </select>
                        </label>
                        {errors.employees && <div className={styles.errorMsg}>{errors.employees}</div>}
                    </div>
                </div>
                <div className={styles.buttonRow}>
                    <button type="button" className={styles.prevBtn} onClick={handlePrev}>&larr; Previous</button>
                    <button type="button" className={styles.nextBtn} onClick={handleNext}>Next &rarr;</button>
                </div>
            </>
        );
    }

    function renderStep4() {
        return (
            <>
                <div className={styles.stepper}>
                    {[1, 2, 3, 4].map((num) =>
                        <div key={num} className={`${styles.step} ${step === num ? styles.active : ''}`}>{num}</div>
                    )}
                </div>
                <div className={styles.formRow}>
                    <div className={styles.formCol}>
                        <label>
                            Appointment Date <span className={styles.required}>*</span>
                            <DatePicker
                                selected={form.appointmentDate}
                                onChange={handleDateChange}
                                minDate={new Date()}
                                dateFormat="MMMM d, yyyy"
                                placeholderText="Select a date"
                                customInput={<CustomDateInput />}
                                className={styles.datePicker}
                            />
                        </label>
                        {errors.appointmentDate && <div className={styles.errorMsg}>{errors.appointmentDate}</div>}
                    </div>
                    <div className={styles.formCol}>
                        <label>
                            Select a time: <span className={styles.required}>*</span>
                            <select
                                name="appointmentTime"
                                value={form.appointmentTime}
                                onChange={handleChange}
                                className={errors.appointmentTime ? styles.inputError : ''}
                            >
                                <option value="09:00 AM">09:00 AM</option>
                                <option value="09:30 AM">09:30 AM</option>
                                <option value="10:00 AM">10:00 AM</option>
                                <option value="10:30 AM">10:30 AM</option>
                                <option value="11:00 AM">11:00 AM</option>
                                <option value="11:30 AM">11:30 AM</option>
                                <option value="12:00 PM">12:00 PM</option>
                                <option value="12:30 PM">12:30 PM</option>
                                <option value="01:00 PM">01:00 PM</option>
                                <option value="01:30 PM">01:30 PM</option>
                                <option value="02:00 PM">02:00 PM</option>
                                <option value="02:30 PM">02:30 PM</option>
                                <option value="03:00 PM">03:00 PM</option>
                                <option value="03:30 PM">03:30 PM</option>
                                <option value="04:00 PM">04:00 PM</option>
                                <option value="04:30 PM">04:30 PM</option>
                                <option value="05:00 PM">05:00 PM</option>
                            </select>
                        </label>
                        {errors.appointmentTime && <div className={styles.errorMsg}>{errors.appointmentTime}</div>}
                    </div>
                    <div className={styles.formCol}>
                        <label>
                            Timezone <span className={styles.required}>*</span>
                            <select
                                name="timezone"
                                value={form.timezone}
                                onChange={handleChange}
                                className={errors.timezone ? styles.inputError : ''}
                            >
                                <option value="">Select timezone</option>
                                {timezoneOptions.map(opt =>
                                    <option key={opt} value={opt}>{opt}</option>
                                )}
                            </select>
                        </label>
                        {errors.timezone && <div className={styles.errorMsg}>{errors.timezone}</div>}
                    </div>
                </div>
                <div className={styles.buttonRow}>
                    <button type="button" className={styles.prevBtn} onClick={handlePrev}>&larr; Previous</button>
                    <button
                        type="submit"
                        className={styles.nextBtn}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit →'}
                    </button>
                </div>

                {submitError && (
                    <div className={styles.errorMessage}>
                        {submitError}
                    </div>
                )}
            </>
        );
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.leftCard}>
                <h2>Get In Touch With Us!</h2>
                <div className={styles.infoGroup}>
                    <p className={styles.bold16}>Phone:</p>
                    <a href="tel:+19786937878" className={styles.contactLink}>+1 978 693 7878</a>
                </div>
                <div className={styles.infoGroup}>
                    <p className={styles.bold16}>Email:</p>
                    <a href="mailto:sales@thelaunchpadteam.com" className={styles.contactLink}>sales@thelaunchpadteam.com</a>
                </div>
                <div className={styles.infoGroup}>
                    <p className={styles.bold16}>USA HQ:</p>
                    <address className={styles.text16}>
                        1309 Coffeen Avenue STE 1200<br />
                        Sheridan, Wyoming 82801
                    </address>
                </div>
                <div className={styles.infoGroup}>
                    <p className={styles.bold16}>Philippines HQ:</p>
                    <address className={styles.text16}>
                        Southern Tourist Inn, 423 Villa Abrille St<br />
                        Poblacion District, Davao City<br />
                        8000 Davao Del Sur
                    </address>
                </div>
            </div>
            <div className={styles.rightCard}>
                <form onSubmit={handleSubmit} autoComplete="off">
                    {step === 1 && renderStep1()}
                    {step === 2 && renderStep2()}
                    {step === 3 && renderStep3()}
                    {step === 4 && renderStep4()}
                </form>
            </div>

            {/* Success Modal */}
            {showSuccessModal && (
                <div className={styles.modalOverlay}>
                    <div className={styles.successModal}>
                        <svg className={styles.checkmark} viewBox="0 0 52 52">
                            <circle className={styles.checkmarkCircle} cx="26" cy="26" r="25" fill="none" />
                            <path className={styles.checkmarkCheck} fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                        </svg>
                        <h3>Thank You!</h3>
                        <p>We've received your information and will get back to you shortly.</p>
                        <button
                            className={styles.successButton}
                            onClick={handleSuccessModalClose}
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}