package aron.crud.controlador;

import aron.crud.modelo.Empleado;
import aron.crud.servicio.IEmpleadoServicio;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("crud")
@CrossOrigin(value = "http://localhost:5173")
public class EmpleadoControlador {

    private static final Logger logger = LoggerFactory.getLogger(EmpleadoControlador.class);


    @Autowired
    private IEmpleadoServicio empleadoServicio;


    @GetMapping("/empleados")
    public List<Empleado> obtenerEmpleados(){
        var empleados = empleadoServicio.listarEmpleados();
        empleados.forEach((empleado -> logger.info(empleado.toString())));
        return empleados;
    }


}
