let isLoading = true;

$(document).ready(function () {
    $.get("http://data.fixer.io/api/latest?access_key=9b461fe8f1a0148c567108c7c909365b&format=1", 
        function(data) {
            $("#loading").hide();

            let rateKeys = Object.keys(data.rates);

            let ratesView = "<table border='1'>";

            ratesView += rateKeys.map((countryCode) => {
                let rateValue = data.rates[countryCode];
                    return "<tr><td>" + countryCode + "</td> <td>" + rateValue + "</td></tr>";
                    // return `
                    //     <tr>
                    //         <td>${countryCode}</td> <td>${rateValue}</td>
                    //     </tr>
                    // `;
            }).join("");

            ratesView = ratesView + "</table>";


            $("#result").append(`<h2>${data.base}</h2>`)
            .append("<p>date: " + data.date + "</p>")
            .append(ratesView);
        }
    );
});