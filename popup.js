/**
 * Knowfox Extension for Firefox - Personal Knowledge Management
 * Copyright (C) 2018 Olav Schettler
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
const KNOWFOX = 'https://knowfox.com';

function fetchForm(tabs) {
  let url = KNOWFOX + '/bookmark?url='
      + encodeURIComponent(tabs[0].url)
      + '&title=' + encodeURIComponent(tabs[0].title);

  location.href = url;
  return;
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.tabs.query({active: true, currentWindow: true})
  .then(fetchForm, onError);
