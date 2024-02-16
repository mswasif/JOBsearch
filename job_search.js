document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("job-search-form");
    const jobList = document.getElementById("job-list");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const keywords = document.getElementById("keywords").value;
        const location = document.getElementById("location").value;
        const jobType = document.getElementById("job-type").value;
        const minSalary = document.getElementById("salary").value;

        
        const searchResults = performSearch(keywords, location, jobType, minSalary);

       s
        displaySearchResults(searchResults);
    });

    function performSearch(keywords, location, jobType, minSalary) {
        
        return [
            {
                title: "Frontend Developer",
                company: "XYZ Company",
                location: "New York, NY",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
                jobType: "Full Time",
                salary: "$80,000 per year"
            },
            {
                title: "Backend Developer",
                company: "ABC Corporation",
                location: "San Francisco, CA",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
                jobType: "Part Time",
                salary: "$60,000 per year"
            },
            {
                title: "SoftWare Developer",
                company: "ABC Corporation",
                location: "San Francisco, CA",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
                jobType: "Part Time",
                salary: "$60,000 per year"
            }

        ];
    }

    function displaySearchResults(results) {
        
        jobList.innerHTML = "";

        
        results.forEach(result => {
            const li = document.createElement("li");
            li.innerHTML = `
                <h3>${result.title}</h3>
                <p>${result.company}</p>
                <p>Location: ${result.location}</p>
                <p>Description: ${result.description}</p>
                <p>Job Type: ${result.jobType}</p>
                <p>Salary: ${result.salary}</p>
                <a href="#" class="details-btn">View Details</a>
                <a href="#" class="apply-btn">Apply</a>
            `;
            jobList.appendChild(li);
        });
    }
});
