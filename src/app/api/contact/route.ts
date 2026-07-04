import { NextResponse } from "next/server";
import { Resend } from "resend";

// Inicializa o Resend com a variável de ambiente secreta
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { name, email, message } = await request.json();

        // Validação básica dos campos obrigatórios
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Todos os campos (nome, email, mensagem) são obrigatórios." },
                { status: 400 }
            );
        }

        // Executa a chamada do serviço de e-mail enviando direto para sua caixa
        await resend.emails.send({
            from: "Portfolio <onboarding@resend.dev>", // Endereço de teste padrão do Resend
            to: "pedro.passos081@gmail.com",
            subject: `💼 Novo Contato: ${name}`,
            replyTo: email, // Define que o botão "responder" do seu e-mail irá direto para o remetente
            html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px; border: 1px solid #eee; padding: 20px; rounded: 8px;">
          <h2 style="color: #111; border-bottom: 1px solid #eee; padding-bottom: 10px;">Nova mensagem do Portfólio</h2>
          <p><strong>Nome do lead:</strong> ${name}</p>
          <p><strong>E-mail de contato:</strong> <a href="mailto:${email}">${email}</a></p>
          <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #000; margin-top: 20px; border-radius: 4px;">
            <p style="margin: 0; font-weight: bold; margin-bottom: 8px;">Mensagem enviada:</p>
            <p style="margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
        });

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error("Erro interno ao disparar a rota de e-mail:", error);
        return NextResponse.json(
            { error: "Falha na execução do servidor ao processar o e-mail." },
            { status: 500 }
        );
    }
}