import { Play } from "phosphor-react";
import { HomeContainer, FormContainer, TaskInput, MinutesAmountInput, CountDownContainter, Separator, StartCountDownButton } from "./styles";

export function Home(){
    return(
        <HomeContainer>
            <form action="">
                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <TaskInput
                        id="task"
                        placeholder="Dê um nome para o seu projeto"
                        list="task-suggestions"
                    />

                    <datalist id="task-suggestions">
                        <option value="Projeto 1"></option>
                        <option value="Projeto 2"></option>
                    </datalist>

                    <label htmlFor="minutesAmount">durante</label>
                    <MinutesAmountInput
                        type="number"
                        id="minutesAmount"
                        placeholder="00"
                        step={5}
                        min={5}
                        max={60}
                    />

                    <span>minutos.</span>
                </FormContainer>
            
                <CountDownContainter>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </CountDownContainter>

                <StartCountDownButton disabled type="submit">
                    <Play size={24}/>
                    Começar
                </StartCountDownButton>
            </form>
        </HomeContainer>
    )
}