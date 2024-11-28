function generateCalendar(year, month) {
    const calendarTable = document.getElementById('calendarTable');
    calendarTable.innerHTML = ''; // Wyczyść zawartość tabeli kalendarza

    // Dni tygodnia
    const daysOfWeek = ['Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sob', 'Ndz'];
    const date = new Date(year, month, 1);
    const firstDayOfMonth = (date.getDay() + 6) % 7; // Poniedziałek = 0
    const lastDayOfMonth = new Date(year, month + 1, 0).getDate();

    // Tworzenie nagłówków z dniami tygodnia
    const headerRow = calendarTable.insertRow();
    for (const day of daysOfWeek) {
        const cell = headerRow.insertCell();
        cell.textContent = day;
        cell.style.fontWeight = 'bold';
    }

    // Tworzenie pustych komórek na początku miesiąca
    let row = calendarTable.insertRow();
    for (let i = 0; i < firstDayOfMonth; i++) {
        row.insertCell();
    }

    // Dodawanie dni miesiąca
    for (let day = 1; day <= lastDayOfMonth; day++) {
        const cell = row.insertCell();
        cell.textContent = day;

        // Zaczynamy nowy wiersz po niedzieli
        if ((row.cells.length % 7) === 0) {
            row = calendarTable.insertRow();
        }
    }
}

// Automatyczne generowanie kalendarza na bieżący miesiąc
document.addEventListener('DOMContentLoaded', () => {
    const today = new Date();
    generateCalendar(today.getFullYear(), today.getMonth());
});
