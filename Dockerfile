Nodo ROM: alpine como constructor 
WORKDIR / usr / src / app 
COPY ./ / usr / src / app 
RUN npm install  
FROM nodo: alpine como aplicación 
WORKDIR / usr / src / app C 
OPY --from = builder / usr / src / app / usr / src / app 
ENTRYPOINT ["/ bin / sh", "-c", "pwd & ls & npm ejecutar servir "]