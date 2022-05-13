import requests
import json
from bs4 import BeautifulSoup


URL = "https://en.wikipedia.org/wiki/List_of_songs_by_Taylor_Swift"

page = requests.get(URL)
page_source = page.content
soup = BeautifulSoup(page_source, "html.parser")

span = soup.find("span", id="Released_songs")
heading = span.parent
table = heading.findNext("table", class_="plainrowheaders")
tbody = table.find("tbody")
rows = tbody.find_all("tr")
rows.pop(0)
albums = []

for row in rows:
    album = {}
    th = row.find("th")
    anchor = th.find("a")
    if anchor is not None:
        name = anchor.string
        album["name"] = name
        td = row.find_all("td")
        released = td[3].string.split(" ")[0].strip()
        album["released"] = int(released)
        albums.append(album)

DUMP_FILE = "albums.json"
with open(DUMP_FILE, "w") as file:
    json.dump(albums, file, indent=2)
