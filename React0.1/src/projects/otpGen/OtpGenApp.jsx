import React, { useState } from 'react'

const OtpGenApp = () => {
    const [otp, setOtp] = useState('');
    let otpCode = '1234567890';

    const generateOtp = () => {
        let generatedOtp = '';
        for (let i = 0; i < 4; i++){
            const randomIndex = Math.floor(Math.random() * otpCode.length);
            generatedOtp += otpCode[randomIndex];
        }
        return generatedOtp;
    }

    const handleGenerateOtp = () => {
        const  newOtp = generateOtp();
        setOtp(newOtp);
        console.log('Generated OTP:', newOtp);
    }

  return (
    <div>
        <p>Generate OTP</p>
        <p>OTP ↣↣ {otp || "Generate Otp"}</p>
        <button onClick={handleGenerateOtp} >Generate</button>
    </div>
  )
}

export default OtpGenApp