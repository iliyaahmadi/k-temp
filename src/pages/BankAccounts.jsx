import React from 'react'
import BankAccountTable from '../components/pages/bankAccounts/BankAccountTable'

function BankAccounts() {
    return (
        <div className='w-full h-fit p-4 flex bankAccounts-container flex-col gap-4'>
            <div className="w-full flex justify-between align-center">
                <h1 className='text-white text-2xl'>لیست حساب‌های بانکی شما</h1>
                <button className='bg-blue-600 rounded-md p-2 text-white hover:bg-blue-500'>
                    افزودن حساب جدید
                </button>
            </div>
            <div className="w-full">
                <BankAccountTable />
            </div>
        </div>
    )
}

export default BankAccounts