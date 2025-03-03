const { createSolicitudServSoc } = require('./create.handlers.solicitud-serv-soc.adapters');
const { findOneSolicitudServSoc } = require('./find-one.handlers.solicitud-serv-soc.adapters');
const { findAllSolicitudesServSoc } = require('./find-all.handlers.solicitudes-serv-soc.adapters');
const { updateSolicitudServSoc } = require('./update.handlers.solicitud-serv-soc.adapters');
const { createSolicitudServSocAlumno } = require('./create.handlers.solicitud-ser-soc-alumno.adapters');

module.exports = {
  createSolicitudServSoc,
  findOneSolicitudServSoc,
  findAllSolicitudesServSoc,
  updateSolicitudServSoc,
  createSolicitudServSocAlumno,
};
