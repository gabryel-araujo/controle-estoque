// ! Incluir Try Catch
import prisma from "../prisma/prismaClient.js";

export const getUsuarios = async (req, res) => {
  let usuarios = await prisma.usuario.findMany();
  res.status(200).json(usuarios);
};

export const setUsuarios = async (req, res) => {
  await prisma.usuario.create({
    data: {
      nome: req.body.nome,
      email: req.body.email,
      senha: req.body.senha,
    },
  });
  res.status(201).json({ message: "Usuário criado com sucesso!" });
};

export const updateUsuarios = async (req, res) => {
  await prisma.usuario.update({
    where: {
      email: req.params.email,
    },
    data: {
      nome: req.body.nome,
      email: req.body.email,
      senha: req.body.senha,
    },
  });
  res.status(201).json({ message: "Usuário editado com sucesso!" });
};

export const deleteUsuarios = async (req, res) => {
  await prisma.usuario.delete({
    where: {
      email: req.params.email,
    },
  });
  res.status(200).json({ message: "Usuário deletado com sucesso!" });
};
