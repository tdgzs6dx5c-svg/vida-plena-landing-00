import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Stethoscope,
  FlaskConical,
  Apple,
  HeartPulse,
  MapPin,
  Phone,
  Mail,
  Activity,
} from "lucide-react";
import heroClinic from "@/assets/hero-clinic.jpg";
import serviceConsult from "@/assets/service-consultation.jpg";
import serviceLab from "@/assets/service-lab.jpg";
import teamAna from "@/assets/team-ana.jpg";
import teamCarlos from "@/assets/team-carlos.jpg";
import teamJuliana from "@/assets/team-juliana.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const states = [
  "AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO",
];

const services = [
  {
    icon: Stethoscope,
    title: "Atendimento Médico",
    desc: "Consultas com especialistas qualificados em diversas áreas da medicina.",
  },
  {
    icon: FlaskConical,
    title: "Exames Laboratoriais e de Imagem",
    desc: "Diagnósticos rápidos e precisos com tecnologia de ponta.",
  },
  {
    icon: Apple,
    title: "Aconselhamento Nutricional",
    desc: "Planos alimentares personalizados para sua saúde e bem-estar.",
  },
  {
    icon: HeartPulse,
    title: "Procedimentos de Saúde",
    desc: "Serviços especializados com segurança e cuidado humanizado.",
  },
];

const team = [
  { name: "Dra. Ana Souza", role: "Clínica Geral", img: teamAna },
  { name: "Dr. Carlos Mendes", role: "Cardiologista", img: teamCarlos },
  { name: "Juliana Lima", role: "Nutricionista", img: teamJuliana },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-soft)]">
              <Activity className="h-5 w-5" />
            </span>
            <span className="text-lg font-semibold tracking-tight">
              Clínica Vida Plena
            </span>
          </a>
          <div className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#sobre" className="transition-colors hover:text-foreground">Sobre</a>
            <a href="#servicos" className="transition-colors hover:text-foreground">Serviços</a>
            <a href="#equipe" className="transition-colors hover:text-foreground">Equipe</a>
            <a href="#contato" className="transition-colors hover:text-foreground">Contato</a>
          </div>
          <Button asChild size="sm" className="bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-soft)] hover:opacity-95">
            <a href="#contato">Agendar</a>
          </Button>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden" style={{ background: "var(--gradient-soft)" }}>
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              Saúde · Confiança · Tecnologia
            </span>
            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Cuidando da sua saúde com excelência e tecnologia
            </h1>
            <h2 className="mt-5 text-lg font-normal text-muted-foreground md:text-xl">
              Atendimento humanizado e serviços completos para o seu bem-estar
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-soft)] hover:opacity-95"
              >
                <a href="#contato">Agende sua consulta</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
              >
                <a href="#servicos">Conheça nossos serviços</a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
              <img
                src={heroClinic}
                alt="Recepção moderna da Clínica Vida Plena"
                width={1600}
                height={1200}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-24" style={{ background: "var(--gradient-soft)" }}>
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Sobre Nós
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Cuidado completo para cada etapa da sua vida
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              A Clínica Vida Plena oferece soluções completas em saúde, com
              atendimento humanizado, tecnologia de ponta e profissionais
              qualificados para garantir o melhor cuidado aos nossos pacientes.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {[
                { n: "+15", l: "anos de história" },
                { n: "+30", l: "especialistas" },
                { n: "+50k", l: "pacientes" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-2xl font-semibold text-primary md:text-3xl">{s.n}</div>
                  <div className="mt-1 text-xs text-muted-foreground md:text-sm">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
              <img
                src={serviceConsult}
                alt="Médico em consulta com paciente"
                width={1200}
                height={900}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-card p-5 shadow-[var(--shadow-card)] md:block">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <HeartPulse className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm font-semibold">Atendimento humanizado</div>
                  <div className="text-xs text-muted-foreground">Pessoas em primeiro lugar</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              O que oferecemos
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Nossos Serviços
            </h2>
            <p className="mt-4 text-muted-foreground">
              Estrutura completa para diagnóstico, tratamento e cuidado contínuo.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <Card
                key={s.title}
                className="group border-border/60 p-6 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-soft)]">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </Card>
            ))}
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
              <img
                src={serviceConsult}
                alt="Consulta médica humanizada"
                width={1200}
                height={900}
                loading="lazy"
                className="h-72 w-full object-cover md:h-80"
              />
            </div>
            <div className="overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
              <img
                src={serviceLab}
                alt="Laboratório de análises clínicas"
                width={1200}
                height={900}
                loading="lazy"
                className="h-72 w-full object-cover md:h-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section id="equipe" className="py-24" style={{ background: "var(--gradient-soft)" }}>
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Profissionais
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Nossa Equipe
            </h2>
            <p className="mt-4 text-muted-foreground">
              Especialistas dedicados ao seu bem-estar.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {team.map((m) => (
              <Card
                key={m.name}
                className="overflow-hidden border-border/60 p-0 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={m.img}
                    alt={`Foto de ${m.name}`}
                    width={800}
                    height={800}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-semibold">{m.name}</h3>
                  <p className="mt-1 text-sm text-primary">{m.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Fale conosco
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Entre em Contato
            </h2>
            <p className="mt-4 text-muted-foreground">
              Preencha o formulário e nossa equipe retornará em breve para
              agendar sua consulta.
            </p>
            <ul className="mt-8 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-primary" />
                <span>SCS Quadra 7, Bloco A — Asa Sul, Brasília/DF</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-primary" />
                <span>(61) 4002-8922</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 text-primary" />
                <span>contato@vidaplena.com.br</span>
              </li>
            </ul>
          </div>

          <Card className="border-border/60 p-6 shadow-[var(--shadow-card)] md:p-8">
            <form
              className="grid gap-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid gap-2">
                <Label htmlFor="nome">Nome</Label>
                <Input id="nome" placeholder="Seu nome completo" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" type="email" placeholder="voce@email.com" required />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="cidade">Cidade</Label>
                  <Input id="cidade" placeholder="Sua cidade" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="estado">Estado</Label>
                  <Select>
                    <SelectTrigger id="estado">
                      <SelectValue placeholder="UF" />
                    </SelectTrigger>
                    <SelectContent>
                      {states.map((uf) => (
                        <SelectItem key={uf} value={uf}>
                          {uf}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button
                type="submit"
                size="lg"
                className="bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-soft)] hover:opacity-95"
              >
                Enviar
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/60 bg-muted/40">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground">
                <Activity className="h-5 w-5" />
              </span>
              <span className="text-base font-semibold">Clínica Vida Plena</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Cuidado humanizado, tecnologia e excelência em saúde.
            </p>
          </div>
          <div className="text-sm text-muted-foreground">
            <h3 className="text-sm font-semibold text-foreground">Endereço</h3>
            <p className="mt-2">SCS Quadra 7, Bloco A</p>
            <p>Asa Sul — Brasília/DF</p>
            <p>CEP 70300-911</p>
          </div>
          <div className="text-sm text-muted-foreground">
            <h3 className="text-sm font-semibold text-foreground">Contato</h3>
            <p className="mt-2">Telefone: (61) 4002-8922</p>
            <p>E-mail: contato@vidaplena.com.br</p>
            <p>Seg a Sex · 7h às 19h</p>
          </div>
        </div>
        <div className="border-t border-border/60 py-6 text-center text-xs text-muted-foreground space-y-1">
          <p>© 2026 Clínica Vida Plena - Todos os direitos reservados</p>
          <p>Criado por Kamyla Emanuelle Gomes 2026</p>
        </div>
      </footer>
    </div>
  );
}
