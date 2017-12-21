import { ApiModelProperty } from "@nestjs/swagger";

export class CatDto {
    @ApiModelProperty() readonly id?: string;
    @ApiModelProperty() readonly name: string;
    @ApiModelProperty() readonly age: number;
    @ApiModelProperty() readonly height: number;
}