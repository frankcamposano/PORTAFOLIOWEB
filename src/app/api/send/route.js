import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    // Parsear el body
    const formData = await req.formData();
    console.log('Datos recibidos:', Object.fromEntries(formData));

    const { email, subject, message } = Object.fromEntries(formData);

    // Validación
    if (!email || !subject || !message) {
      return NextResponse.json({ error: "Datos incompletos" }, { status: 400 });
    }

    // Intentar guardar en la base de datos
    const savedContact = await prisma.contact.create({
      data: { email, subject, message },
    });

    console.log('Datos guardados en DB:', savedContact);

    return NextResponse.json({
      message: "Mensaje guardado exitosamente",
      contact: savedContact,
    });

  } catch (error) {
    console.error('Error general:', error);
    
    return NextResponse.json({ 
      error: error.message || "Error al procesar la solicitud" 
    }, { status: 500 });
  }
}
