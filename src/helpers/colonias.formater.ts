export interface Colonia {
  d_codigo: string;
  d_asenta: string;
  d_tipo_asenta: string;
  d_mnpio: string;
  d_estado: string;
  d_ciudad: string;
}

interface Response {
  codigo_postal: string;
  municipio: string;
  estado: string;
  colonias: string[];
}

const zipCodeFormatter = (zipcodes: any) => {
  const colonias: Colonia[] = zipcodes;
  const response: Response = {
    codigo_postal: colonias[0].d_codigo,
    municipio: colonias[0].d_mnpio,
    estado: colonias[0].d_estado,
    colonias: [],
  };

  colonias.map((colonias: Colonia) => {
    response.colonias.push(colonias.d_asenta);
  });

  return response;
};

export { zipCodeFormatter };
