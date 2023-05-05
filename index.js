const searchBtn = document.querySelector('.searchBtn');
const table = document.querySelector(".table");
const tableBody = document.querySelector(".tableBody");
let myData = [];

fetch("https://gist.githubusercontent.com/harsh3195/b441881e0020817b84e34d27ba448418/raw/c4fde6f42310987a54ae1bc3d9b8bfbafac15617/demo-json-data.json")
    .then(response => response.json())
    .then(data => {
        myData = data;
        console.log(myData)
        myData.map(student => {
            tableBody.innerHTML += `
            <tr>
                <td>${student.id}</td>
                <td><img src=${student.img_src} alt=${student.first_name}> ${student.first_name} ${student.last_name}</td>
                <td>${student.gender}</td>
                <td>${student.class}</td>
                <td>${student.marks}</td>
                <td>${student.passing ? 'Passed' : 'Failed'}</td>
                <td>${student.email}</td>
            </tr>
            `
        })
        searchBtn.addEventListener('click', (event) => {
            event.preventDefault();

            const myInput = document.querySelector('.myInput').value;

            if (myInput === "") {
                tableBody.innerHTML = "";
                myData.map(student => {
                    tableBody.innerHTML += `
                    <tr>
                        <td>${student.id}</td>
                        <td><img src=${student.img_src} alt=${student.first_name}> ${student.first_name} ${student.last_name}</td>
                        <td>${student.gender}</td>
                        <td>${student.class}</td>
                        <td>${student.marks}</td>
                        <td>${student.passing ? 'Passed' : 'Failed'}</td>
                        <td>${student.email}</td>
                    </tr>
                    `
                })
            }
            else {
                tableBody.innerHTML = "";
                let myResult =
                    myData.filter(user => {
                        const firstNameMatch = user.first_name.toLowerCase().includes(myInput.toLowerCase());
                        const lastNameMatch = user.last_name.toLowerCase().includes(myInput.toLowerCase());
                        const emailMatch = user.email.toLowerCase().includes(myInput.toLowerCase());
                        return firstNameMatch || lastNameMatch || emailMatch;
                    })

                myResult.map(student => {
                    tableBody.innerHTML += `
                    <tr>
                        <td>${student.id}</td>
                        <td><img src=${student.img_src} alt=${student.first_name}> ${student.first_name} ${student.last_name}</td>
                        <td>${student.gender}</td>
                        <td>${student.class}</td>
                        <td>${student.marks}</td>
                        <td>${student.passing ? 'Passed' : 'Failed'}</td>
                        <td>${student.email}</td>
                    </tr>
                    `
                });


            }

        });
        const aToZ = document.querySelector('.sortA-Z');
        aToZ.addEventListener('click', (e) => {
            e.preventDefault();
            const sortedPeopleAcc = [...myData].sort((a, b) => {
                if (a.first_name > b.first_name) {
                    return 1;
                }
                if (a.first_name < b.first_name) {
                    return -1;
                }
                return 0;
            });
            tableBody.innerHTML = "";
            sortedPeopleAcc.forEach(student => {
                tableBody.innerHTML += `
                <tr>
                    <td>${student.id}</td>
                    <td><img src=${student.img_src} alt=${student.first_name}> ${student.first_name} ${student.last_name}</td>
                    <td>${student.gender}</td>
                    <td>${student.class}</td>
                    <td>${student.marks}</td>
                    <td>${student.passing ? 'Passed' : 'Failed'}</td>
                    <td>${student.email}</td>
                </tr>
                `
            });
        });
        const zToA = document.querySelector('.sortZ-A');
        zToA.addEventListener('click', (e) => {
            e.preventDefault();
            const sortedPeopleDec = [...myData].sort((a, b) => {
                if (a.first_name > b.first_name) {
                    return -1;
                }
                if (a.first_name < b.first_name) {
                    return 1;
                }
                return 0;
            });
            tableBody.innerHTML = "";
            sortedPeopleDec.forEach(student => {
                tableBody.innerHTML += `
                <tr>
                    <td>${student.id}</td>
                    <td><img src=${student.img_src} alt=${student.first_name}> ${student.first_name} ${student.last_name}</td>
                    <td>${student.gender}</td>
                    <td>${student.class}</td>
                    <td>${student.marks}</td>
                    <td>${student.passing ? 'Passed' : 'Failed'}</td>
                    <td>${student.email}</td>
                </tr>
                `
            });
        });
        const marksSort = document.querySelector('.sortbyMarks');
        marksSort.addEventListener('click', (e) => {
            e.preventDefault();
            const sortedMarks = [...myData].sort((a, b) => b.marks - a.marks);
            tableBody.innerHTML = "";
            sortedMarks.forEach(student => {
                tableBody.innerHTML += `
                <tr>
                    <td>${student.id}</td>
                    <td><img src=${student.img_src} alt=${student.first_name}> ${student.first_name} ${student.last_name}</td>
                    <td>${student.gender}</td>
                    <td>${student.class}</td>
                    <td>${student.marks}</td>
                    <td>${student.passing ? 'Passed' : 'Failed'}</td>
                    <td>${student.email}</td>
                </tr>
                `
            });

        });

        const passSort = document.querySelector('.sortbyPassing');
        passSort.addEventListener('click', (e) => {
            e.preventDefault();
            const sortedPass = [...myData].sort((a, b) => b.passing - a.passing);
            tableBody.innerHTML = "";
            sortedPass.forEach(student => {
                tableBody.innerHTML += `
                <tr>
                    <td>${student.id}</td>
                    <td><img src=${student.img_src} alt=${student.first_name}> ${student.first_name} ${student.last_name}</td>
                    <td>${student.gender}</td>
                    <td>${student.class}</td>
                    <td>${student.marks}</td>
                    <td>${student.passing ? 'Passed' : 'Failed'}</td>
                    <td>${student.email}</td>
                </tr>
                `
            });

        });
        const classSort = document.querySelector('.sortbyClass');
        classSort.addEventListener('click', (e) => {
            e.preventDefault();
            const sortedclass = [...myData].sort((a, b) => b.class - a.class);
            tableBody.innerHTML = "";
            sortedclass.forEach(student => {
                tableBody.innerHTML += `
                <tr>
                    <td>${student.id}</td>
                    <td><img src=${student.img_src} alt=${student.first_name}> ${student.first_name} ${student.last_name}</td>
                    <td>${student.gender}</td>
                    <td>${student.class}</td>
                    <td>${student.marks}</td>
                    <td>${student.passing ? 'Passed' : 'Failed'}</td>
                    <td>${student.email}</td>
                </tr>
                `
            });

        });
        const GenderSort = document.querySelector('.sortbyGender');
        GenderSort.addEventListener('click', (e) => {
            e.preventDefault();
            const sortedGender = [...myData].sort((a, b) => {
                if (a.gender < b.gender) {
                    return -1;
                }
                if (a.gender > b.gender) {
                    return 1;
                }
                return 0;
            });
            tableBody.innerHTML = "";
            sortedGender.forEach(student => {
                tableBody.innerHTML += `
                <tr>
                    <td>${student.id}</td>
                    <td><img src=${student.img_src} alt=${student.first_name}> ${student.first_name} ${student.last_name}</td>
                    <td>${student.gender}</td>
                    <td>${student.class}</td>
                    <td>${student.marks}</td>
                    <td>${student.passing ? 'Passed' : 'Failed'}</td>
                    <td>${student.email}</td>
                </tr>
                `
            });

        });
    })
    .catch(err => console.log(err.message))


