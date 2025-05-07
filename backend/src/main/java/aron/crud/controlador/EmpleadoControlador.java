package aron.crud.controlador;

import aron.crud.modelo.Empleado;
import aron.crud.servicio.IEmpleadoServicio;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.ErrorResponseException;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

    @PostMapping("/empleados")
    public Empleado agregarEmpleado(@RequestBody Empleado empleado){
        logger.info("Empleado agregar" + empleado);
        return empleadoServicio.guardarEmpleado(empleado);
    }

    @DeleteMapping("/empleados/{id}")
    public ResponseEntity<Map<String, Boolean>> eliminarEmpleado(@PathVariable Integer id){
        Empleado empleado = empleadoServicio.buscarEmpleadoPorId(id);
        if(empleado == null){
            throw new Error("Error");
        }
        empleadoServicio.eliminarEmpleado(empleado);
        Map<String, Boolean> respuesta = new HashMap<>();
        respuesta.put("eliminado", Boolean.TRUE);
        return ResponseEntity.ok(respuesta);

    }

    @GetMapping("empleados/{id}")
    public ResponseEntity<Empleado> obtenerEmpleadoPorId(@PathVariable Integer id){
        Empleado empleado = empleadoServicio.buscarEmpleadoPorId(id);
        if(empleado == null){
            throw new Error("Error el usuario no existe");
        }
        return ResponseEntity.ok(empleado);
    };

    @PutMapping("empleados/{id}")
    public ResponseEntity<Empleado> editarEmpleado(@PathVariable Integer id, @RequestBody Empleado empleadoEdit) {
        Empleado empleado = empleadoServicio.buscarEmpleadoPorId(id);
        empleado.setNombre(empleadoEdit.getNombre());
        empleado.setSueldo(empleadoEdit.getSueldo());
        empleado.setDepartamento(empleadoEdit.getDepartamento());
        empleadoServicio.guardarEmpleado(empleado);
        return ResponseEntity.ok(empleado);
    };
}
