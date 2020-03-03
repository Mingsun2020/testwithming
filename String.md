String
------
"abc", "123"

Integer
--------
1, 2, 3, 0, 38472384

Float
------
1.3, 2.6, 3.9+e10

Boolean
-------
`true`, `false`

`const isMingAMan = true`

```javascript
if (isMingAMan == true) {
    1
}
else {
    2
}
```

Array
-----
```javascript
const a = [3, "a", true, 1.5, "bavdafsg", 3, 3]

          [0,  1,    2,    3,      4,     5, 6]

console.log(a[1])  //"a"
console.log(a[0]) //3
console.log(a[6]) //3
console.log(a.length)   //7
```

Object
------

```javascript
const staff = [
    {
        name: "Ming",
        isWorkingInNiceCar: true,
        isMale: true,
        address: "Flat ....",
        isCoughing: false
    },
    {
        name: "Yip",
    },
    {
        name: "Barry",
    }
]

for (const i = 0; i< staff.length; i++) {
    const staffHealth = checkHealth(staff[i])
    console.log(staffHealth)
}

function checkHealth(people) {
    if (people.isCoughing == true) {
        return "Warning! 
    }
    else return `${people.name} is healthy!`
}
```



Case Study
--------
```javascript
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
        customerPhoto: 010101010000010101...,
        isLocked: false,
        isSupplier: false,
        isCustomer: true,
    },
    {
        id: 7,
        ...
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

```