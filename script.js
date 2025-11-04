async function loadData() {
    let data = await d3.csv("plantWalkData.csv", d3.autoType);
    let columns = data.columns;

    data = d3.filter(data, (d) => {
        return d["Average Height"] <= 25;
    });
    console.log(data);

    data = d3.sort(data, (a, b) => {
        return d3.descending(a["Average Height"], b["Average Height"]);
    });
    console.log(data);

    // mean
    let mean = d3.mean(data, (d) => {
        return d["Average Height"];
    })
    console.log(mean);

    // sum
    let sum = d3.sum(data, (d) => {
        return d["Average Height"];
    })
    console.log(sum);

    // mode
    let mode = d3.mode(data, (d) => {
        return d["Average Height"];
    })
    console.log(mode);

    // min
    let min = d3.min(data, (d) => {
        return d["Average Height"];
    })
    console.log(min);


    // max
    let max = d3.max(data, (d) => {
        return d["Average Height"];
    })
    console.log(max);

    let table = document.createElement("table");

    // create header
    let header = "<tr>";

    columns.forEach((d) => {
        header += "<th>" + d + "</th>";
    })
    header += "</tr>";

    console.log(header);

    let rows = "";

    data.forEach((d) => {
        rows += "<tr>"
        rows += "<td>" + d["Plants"] + "</td>";
        rows += "<td>" + d["Fact"] + "</td>";
        rows += "<td>" + d["Average Height"] + "</td>";
        rows += "<td>" + d["Source"] + "</td>";
        rows += "</tr>"
    })
    console.log(rows);

    let tableHTML = header + rows;
    table.innerHTML = tableHTML;

    let body = document.querySelector("body");
    body.appendChild(table);
}

window.onload = function() {
    loadData();
};