const CustomerType = [
    {
        id: 1,
        name: "RETAIL"
    },
    {
        id: 2,
        name: "BUSINESS"
    }
]

const Staff = [
    {
        id: 1,
        name: "Ross"
    },
    {
        id: 3,
        name: "Ming"
    }
]
const PartyMaster = [
    {
        id: 6,
        customerName: "科進",
        customerType: 2,
        sales: 3,
        paymentTerms: "COD",
        creditAmount: 0,
        customerPhoto: "010101010000010101...,",
        isLocked: false,
        isSupplier: false,
        isCustomer: true,
    },
    {
        id: 7
    }
]

function getSalesAndCustomerName(customer) {
    const salesName = findStaffName(customer.sales)
    const customerName = customer.customerName

    return `Nice Car Staff ${salesName} handles ${customerName}`    //Nice Car Staff Ming handles 科進
}

function findStaffName(sales) {
    return Staff.find(v=> v.id==sales).name
}

console.log(getSalesAndCustomerName(PartyMaster[0]))