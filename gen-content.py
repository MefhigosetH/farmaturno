# import urllib library
from urllib.request import urlopen
  
# import json
import json



def get_farmacias():
    # store the URL in url as 
    # parameter for urlopen
    url = "https://farmaturno.com.ar/api/farmacias"
    
    # store the response of URL
    response = urlopen(url)
    
    # storing the JSON response 
    # from url in data
    data_json = json.loads(response.read())

    return data_json["Items"]


# See: https://micro.recursospython.com/recursos/como-quitar-tildes-de-una-cadena.html
def normalize_string(to_normalize):
    result = to_normalize.lower()

    char_remove = (
        ("á", "a"),
        ("é", "e"),
        ("í", "i"),
        ("ó", "o"),
        ("ú", "u"),
        ("ñ", "n"),
        (" ", "-"),
        ("(", ""),
        (")", ""),
        ("\"", "")
    )

    for a, b in char_remove:
        result = result.replace(a, b)

    return result



if __name__ == "__main__":   
    farmacias = get_farmacias()

    for farmacia in farmacias:
        title = normalize_string(farmacia["name"])
        
        with open("app/content/es/farmacias/{}.md".format(title), 'w') as f:
            f.write("---\n")
            f.write("title: \"{}\"\n".format( farmacia["name"].replace("\"","")))
            f.write("description: \"{}\"\n".format( farmacia["formatted_address"]))
            f.write("date: 2023-09-17T22:39:27Z\n")
            f.write("thumbnail: https://picsum.photos/id/1019/500/200\n")

            f.write("turnos:\n")
            for turno in farmacia["turnos"]:
                f.write("- \"{}\"\n".format(turno))

            f.write("localidad: \"Rafael Calzada\"\n")
            f.write("place_id: \"{}\"\n".format( farmacia["place_id"]))

            if "phone" in farmacia:
                f.write("phone: \"{}\"\n".format( farmacia["phone"]))
                
            f.write("compound_code: \"{}\"\n".format( farmacia["compound_code"]))
            f.write("lng: \"{}\"\n".format(farmacia["lng"]))
            f.write("lat: \"{}\"\n".format(farmacia["lat"]))
            f.write("---\n\n")
            f.write(farmacia["name"])