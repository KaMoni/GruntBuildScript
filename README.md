GruntBuildScript
================

Grunt Build Script, das die gesamte Projektstruktur kopiert und alle Javascript-Dateien uglifiziert.


A. Vorraussetzungen für die Ausführung des Skripts:

1. Installation von Node (http://nodejs.org/download/)
2. Die beiden Dateien Gruntfile.js und package.json müssen im gleich Verzeichnis vorliegen wie das Projekt.
'Projektname' muss in beiden Dateien durch den Namen des Projekts ersetzt werden ;-)!
3. Erzeugen von Projekt-Abhängigkeiten in der Node.js command prompt:
	npm install 
4. Installation der Grunt CLI in der Node.js command prompt:
	npm install -g grunt-cli
5. Installation des Grunt Plugins uglifiers in der Node.js command prompt:
	npm install grunt-contrib-uglify --save-dev
6. Installation des Grunt Plugins contrib-copy in der Node.js command prompt:
	npm install grunt-contrib-copy --save-dev

Durch das Installieren der Plugins entsteht der Ordner node_modules mit den Unterordnern grunt, grunt-contrib-copy und grunt-contrib-uglify
	
B. Ausführen des Skripts:

In der Node.js command prompt den Befehl grunt eingeben (im Verzeichnis, in dem die beiden Dateien Gruntfile.js und package.json sowie das Projekt liegen)

Nach der Ausführung des Skripts liegt im Ordner distribution das gesamte Projekt mit minifizierten Javascript-Dateien vor. 

Achtung: bei fehlerhaften Javascript-Dateien bricht das Script ab.
