let tablesVisible = false;

document.getElementById("button2").addEventListener("click", function() {
    let shadyDiv = document.getElementById("shady");

    if (tablesVisible) {
        while (shadyDiv.firstChild) {
            shadyDiv.removeChild(shadyDiv.firstChild);
        }
    } else {
        let browserInfo = {
            "Browser CodeName:": navigator.appCodeName,
            "Browser Name:": navigator.appName,
            "Browser Version:": navigator.appVersion,
            "Cookies Enabled:": navigator.cookieEnabled,
            "Browser Language:": navigator.language,
            "Browser Online:": navigator.onLine,
            "Platform:": navigator.platform,
            "User-agent header:": navigator.userAgent
        };
        let table = document.createElement("table");
        let tbody = document.createElement("tbody");
        for (let key in browserInfo) {
            let tr = document.createElement("tr");
            let td1 = document.createElement("td");
            let td2 = document.createElement("td");
            td1.textContent = key;
            td2.textContent = browserInfo[key];

            td1.classList.add("border", "border-black", "px-4", "py-2");
            td2.classList.add("border", "border-black", "px-4", "py-2");

            tr.appendChild(td1);
            tr.appendChild(td2);
            tbody.appendChild(tr);
        }
        table.appendChild(tbody);
        document.getElementById("shady").appendChild(table);
        table.classList.add("table", "table-auto", "w-1/2", "mx-auto", "mt-4", "flex", "border");



        let userInfo = {
            "Screen Width:": screen.width + "px",
            "Screen Height:": screen.height + "px",
            "Color Depth:": screen.colorDepth + "bit",
            "Pixel Depth:": screen.pixelDepth + "bit"
        };
        let table2 = document.createElement("table");
        let tbody2 = document.createElement("tbody");
        for (let key in userInfo) {
            let tr = document.createElement("tr");
            let td1 = document.createElement("td");
            let td2 = document.createElement("td");
            td1.textContent = key;
            td2.textContent = userInfo[key];
            
            td1.classList.add("border", "border-black", "px-4", "py-2");
            td2.classList.add("border", "border-black", "px-4", "py-2");

            tr.appendChild(td1);
            tr.appendChild(td2);
            tbody2.appendChild(tr);
        }
        table2.appendChild(tbody2);
        table2.classList.add("flex", "table", "table-auto", "w-1/2", "mx-auto", "mt-4", "flex", "mb-20");
        document.getElementById("shady").appendChild(table2);

        let locationInfo = {
            "URL:": location.href,
            "Host:": location.host,
            "Hostname:": location.hostname,
            "Port:": location.port,
            "Protocol:": location.protocol
        };
        let table3 = document.createElement("table");
        let tbody3 = document.createElement("tbody");
        for (let key in locationInfo) {
            let tr = document.createElement("tr");
            let td1 = document.createElement("td");
            let td2 = document.createElement("td");
            td1.textContent = key;
            td2.textContent = locationInfo[key];
            
            td1.classList.add("border", "border-black", "px-4", "py-2");
            td2.classList.add("border", "border-black", "px-4", "py-2");

            tr.appendChild(td1);
            tr.appendChild(td2);
            tbody3.appendChild(tr);
        }
        table3.appendChild(tbody3);
        table3.classList.add("flex", "table", "table-auto", "w-1/2", "mx-auto", "mt-4", "flex", "mb-20");
        document.getElementById("shady").appendChild(table3);

        let historyInfo = {
            "History Length:": history.length
        };
        let table4 = document.createElement("table");
        let tbody4 = document.createElement("tbody");
        for (let key in historyInfo) {
            let tr = document.createElement("tr");
            let td1 = document.createElement("td");
            let td2 = document.createElement("td");
            td1.textContent = key;
            td2.textContent = historyInfo[key];
            
            td1.classList.add("border", "border-black", "px-4", "py-2");
            td2.classList.add("border", "border-black", "px-4", "py-2");

            tr.appendChild(td1);
            tr.appendChild(td2);
            tbody4.appendChild(tr);
        }
        table4.appendChild(tbody4);
        table4.classList.add("flex", "table", "table-auto", "w-1/2", "mx-auto", "mt-4", "flex", "mb-20");
        document.getElementById("shady").appendChild(table4);

    }
    tablesVisible = !tablesVisible;
    
});